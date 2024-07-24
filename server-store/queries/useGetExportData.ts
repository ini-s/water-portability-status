import { useQuery } from "@tanstack/react-query";

import { api } from "../utils";

import { IGetAllArgs } from "./useGetNotifications";

const getExportData = async ({
  location,
  start_date,
  end_date,
}: Pick<IGetAllArgs, "location" | "start_date" | "end_date">) => {
  const params = {
    location,
    start_date,
    end_date,
  };
  const response = await api.get("/water-quality-data/export", { params });

  return response.data.data;
};

const useGetExportData = ({
  location,
  start_date,
  end_date,
}: Pick<IGetAllArgs, "location" | "start_date" | "end_date">) => {
  const dateFormat = /^\d{4}-\d{2}-\d{2}$/; // YYYY-MM-DD format
  const isEnabled =
    dateFormat.test(start_date ?? "") && dateFormat.test(end_date ?? "");

  return useQuery(
    ["EXPORT_DATA", location, start_date, end_date],
    () => getExportData({ location, start_date, end_date }),
    {
      keepPreviousData: true,
      retry: false,
      staleTime: 1000 * 60 * 2,
      enabled: isEnabled,
    }
  );
};

export default useGetExportData;
