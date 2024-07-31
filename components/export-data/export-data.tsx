import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import dayjs from "dayjs";

import {
  Button,
  DateRangeBox,
  ErrorMessage,
  SelectRange,
} from "../../styles/header.styles";

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
  const [exportButtonClicked, setExportButtonClicked] = useState(false); // Track export button click

  const dropdownRef = useRef<HTMLDivElement>(null);

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
        salinity,
        temperature,
        prediction_log,
        electrical_conductivity,
        specific_gravity,
        total_dissolved_solids,
        ...items
      } = data;
      return {
        ...items,
        "salinity (ppm)": salinity,
        "temperature (°C)": temperature,
        "ec (µS/cm)": electrical_conductivity,
        sg: specific_gravity,
        "tds (ppm)": total_dissolved_solids,
        pred_pH: prediction_log?.ph,
        "pred_temp (°C)": prediction_log?.temperature,
        potability: prediction_log?.potability,
      };
    });

  useEffect(() => {
    if (data && !isFetching) {
      setIsDataReady(true);
    }
  }, [data, isFetching]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDateRange(false);
        setExportButtonClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
    setExportButtonClicked(false);
  };
  const isDownloadDisabled =
    !dateRange.startDate || !dateRange.endDate || !isDataReady;

  return (
    <>
      <Button
        style={{
          opacity: exportButtonClicked ? 0.3 : 1,
        }}
        onClick={() => {
          setShowDateRange(true);
          setExportButtonClicked(true);
        }}
      >
        export data
      </Button>

      {showDateRange && (
        <DateRangeBox ref={dropdownRef}>
          <SelectRange>Select Date Range</SelectRange>
          <input
            type="date"
            id="startDate"
            name="startDate"
            onChange={handleDateChange}
            value={dateRange.startDate}
            placeholder="MM/DD/YYYY"
          />

          <input
            type="date"
            id="endDate"
            name="endDate"
            onChange={handleDateChange}
            value={dateRange.endDate}
            placeholder="MM/DD/YYYY"
          />

          <button
            style={{
              opacity: isDownloadDisabled ? 0.3 : 1,
            }}
            disabled={isDownloadDisabled}
            onClick={handleDownload}
          >
            {isFetching || isInitialLoading
              ? "Loading data for download"
              : "download"}
          </button>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </DateRangeBox>
      )}
    </>
  );
};

export default ExportData;
