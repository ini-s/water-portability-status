import { ChangeEvent, useState, useEffect } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { NextPageWithLayout } from "./_app";

import GeneralLayout from "../layouts/general-layout";

import {
  FilterBox,
  NotificationsContainer,
  Table,
  NotificationHeader,
  FilterButton,
  SpinnerContainer,
} from "../styles/notifications.styles";

import Pagination from "../components/pagination/pagination";
import Spinner from "../components/spinner-component/spinner-component";
import NoDataComponent from "../components/no-data-component/no-data-component";

import useGetNotifications from "../server-store/queries/useGetNotifications";
import {
  getEndDateFromQuery,
  getLocationFromQuery,
  getPageFromQuery,
  getSizeFromQuery,
  getStartDateFromQuery,
} from "../server-store/queries/queries";

export interface INotifications {
  created_at: string;
  location: string;
  message: string;
}

const NotificationsPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { query } = router;

  const queryPage = getPageFromQuery(query.page);
  const queryLocation = getLocationFromQuery(query.location);
  const startDate = getStartDateFromQuery(query.start_date);
  const endDate = getEndDateFromQuery(query.end_date);
  const size = getSizeFromQuery(query.size);

  const [currentPage, setCurrentPage] = useState(queryPage);
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const { data, isInitialLoading, isFetching } = useGetNotifications({
    page: currentPage,
    location: queryLocation,
    start_date: startDate,
    end_date: endDate,
    size,
  });
  const notifications: INotifications[] = data?.notifications;

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  const filterByDateRange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (dayjs(dateRange.startDate).isAfter(dayjs(dateRange.endDate))) {
      setErrorMessage("Start date cannot be after end date.");
      return;
    }

    setErrorMessage("");

    router.push({
      pathname: router.pathname,
      query: {
        ...query,
        start_date: dateRange.startDate || undefined,
        end_date: dateRange.endDate || undefined,
        page: 1,
      },
    });
  };

  const clearFilters = () => {
    const newQuery = { ...query, start_date: undefined, end_date: undefined };

    delete newQuery.start_date;
    delete newQuery.end_date;

    router.push({
      pathname: router.pathname,
      query: { ...newQuery, page: 1 },
    });

    setDateRange({ startDate: "", endDate: "" });
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <NotificationsContainer>
      <NotificationHeader>
        <h1>Notification</h1>
        <FilterBox>
          <div>
            <p>Filter by Date Range</p>
            <input
              placeholder="MM/DD/YYYY"
              type="date"
              id="startDate"
              name="startDate"
              onChange={handleDateChange}
              value={dateRange.startDate}
            />
            <p>-</p>
            <input
              placeholder="MM/DD/YYYY"
              type="date"
              id="endDate"
              name="endDate"
              onChange={handleDateChange}
              value={dateRange.endDate}
            />
            <FilterButton>
              <button
                disabled={dateRange.startDate === ""}
                onClick={filterByDateRange}
              >
                filter
              </button>
              <button type="button" onClick={clearFilters}>
                clear filters
              </button>
            </FilterButton>
          </div>
          {errorMessage && <p>{errorMessage}</p>}
        </FilterBox>
      </NotificationHeader>

      {isFetching || isInitialLoading ? (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>date & time</th>
              <th>event description</th>
            </tr>
          </thead>
          {notifications?.length > 0 ? (
            <tbody>
              {notifications.map((el, index) => (
                <tr key={index}>
                  <td>{dayjs(el.created_at).format("MM/DD/YYYY HH:mm")}</td>
                  <td>{el.message}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan={2} style={{ textAlign: "center" }}>
                  <NoDataComponent />
                </td>
              </tr>
            </tbody>
          )}
        </Table>
      )}
      {notifications?.length > 0 && (
        <Pagination
          size={data?.total_count ?? 0}
          postsPerPage={size}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </NotificationsContainer>
  );
};

NotificationsPage.getLayout = (page) => {
  return (
    <GeneralLayout pageTitle="notifications" removeBtn={true}>
      {page}
    </GeneralLayout>
  );
};

export default NotificationsPage;
