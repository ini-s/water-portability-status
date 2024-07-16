import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { NextPageWithLayout } from "./_app";

import GeneralLayout from "../layouts/general-layout";

import {
  FilterBox,
  NotificationsContainer,
  Table,
} from "../styles/notifications.styles";

import Pagination from "../components/pagination/pagination";

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

  const { data, isInitialLoading, isFetching, isPreviousData } =
    useGetNotifications({
      page: currentPage,
      location: queryLocation,
      start_date: startDate,
      end_date: endDate,
      size,
    });

  const notifications: INotifications[] = data?.notifications;

  const startingIndex = currentPage * size - size;

  // const size = notificationsData.length;

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  const filterByDateRange = () => {
    router.push({
      pathname: router.pathname,
      query: {
        ...query,
        start_date: dateRange.startDate || undefined,
        end_date: dateRange.endDate || undefined,
        page: currentPage,
      },
    });
  };

  const clearFilters = () => {
    const newQuery = { ...query, startDate: undefined, endDate: undefined };

    delete newQuery.startDate;
    delete newQuery.endDate;

    router.push({
      pathname: router.pathname,
      query: { ...newQuery },
    });

    setDateRange({ startDate: "", endDate: "" });
  };

  return (
    <NotificationsContainer>
      <h1>Notification</h1>
      <FilterBox>
        <input
          type="date"
          id="startDate"
          name="startDate"
          onChange={handleDateChange}
          value={dateRange.startDate}
        />

        <input
          type="date"
          id="endDate"
          name="endDate"
          onChange={handleDateChange}
          value={dateRange.endDate}
        />
        <button onClick={filterByDateRange}>filter by date range</button>
        <button onClick={clearFilters}>clear filters</button>
      </FilterBox>
      <Table>
        <thead>
          <tr>
            <th>date & time</th>
            <th>event description</th>
          </tr>
        </thead>
        <tbody>
          {/* 
          isFetching || isInitialLoading ? <Spinner></Spinner>:
          */}
          {notifications?.length > 0 &&
            notifications.map((el, index) => (
              <tr key={index}>
                <td>{dayjs(el.created_at).format("MM/DD/YYYY HH:mm")}</td>
                <td>{el.message}</td>
              </tr>
            ))}
        </tbody>
      </Table>

      <Pagination
        size={data?.total_count ?? 0}
        postsPerPage={size}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
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
