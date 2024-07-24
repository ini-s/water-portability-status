import React, { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import { Button, DateRangeBox } from "../../styles/header.styles";

import useGetExportData from "../../server-store/queries/useGetExportData";
import { getLocationFromQuery } from "../../server-store/queries/queries";

import { IWaterData } from "../../types/data-types";

interface IExportData {
  fileName: string;
}

const ExportData: React.FC<IExportData> = ({ fileName }) => {
  const [showDateRange, setShowDateRange] = useState(false);
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isDataReady, setIsDataReady] = useState(false);

  const router = useRouter();
  const { query } = router;
  const queryLocation = getLocationFromQuery(query.location);

  const formattedStartDate = dayjs(dateRange.startDate).format("YYYY-MM-DD");
  const formattedEndDate = dayjs(dateRange.endDate).format("YYYY-MM-DD");

  const { data, isInitialLoading, isFetching } = useGetExportData({
    location: queryLocation,
    start_date: formattedStartDate,
    end_date: formattedEndDate,
  });

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  const realTimeData =
    data &&
    data?.map((data: IWaterData) => {
      const {
        prediction_log,
        electrical_conductivity,
        specific_gravity,
        total_dissolved_solids,
        ...items
      } = data;
      return {
        ...items,
        ec: electrical_conductivity,
        sg: specific_gravity,
        tds: total_dissolved_solids,
        pred_pH: prediction_log?.ph,
        pred_temp: prediction_log?.temperature,
        potability: prediction_log?.potability,
      };
    });

  useEffect(() => {
    if (data && !isFetching) {
      setIsDataReady(true);
    }
  }, [data, isFetching]);

  const handleDownload = () => {
    if (dayjs(dateRange.startDate).isAfter(dayjs(dateRange.endDate))) {
      setErrorMessage("Start date cannot be after end date.");
      return;
    }

    if (!data || data.length === 0) return;

    //download only if data is ready
    const csvHeader = Object.keys(realTimeData[0]).join(",");
    const csvContent = realTimeData
      .map((row: String) => Object.values(row).join(","))
      .join("\n");
    const csv = `${csvHeader}\n${csvContent}`;

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.csv`;

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    //reset after data download
    setDateRange({ startDate: "", endDate: "" });
    setErrorMessage("");
    setShowDateRange(false);
  };

  return (
    <>
      <Button onClick={() => setShowDateRange(true)}>export data</Button>

      {showDateRange && (
        <DateRangeBox>
          <p>Select Date Range</p>
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

          <button
            disabled={
              !dateRange.startDate || !dateRange.endDate || !isDataReady
            }
            onClick={handleDownload}
          >
            {isFetching || isInitialLoading
              ? "Loading data for download"
              : "download"}
          </button>

          {errorMessage && <p>{errorMessage}</p>}
        </DateRangeBox>
      )}
    </>
  );
};

export default ExportData;
