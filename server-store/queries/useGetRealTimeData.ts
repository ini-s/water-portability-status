import { useQuery } from "@tanstack/react-query";
import { api } from "../utils";

import { IGetAllArgs } from "./useGetNotifications";

const getRealTimeData = async ({
  location,
  start_date,
  end_date,
}: Pick<IGetAllArgs, "location" | "start_date" | "end_date">) => {
  const params = {
    location,
    start_date,
    end_date,
  };
  const response = await api.get("/export", { params });

  return response.data.data;
};

const useGetRealTimeData = ({
  location,
  start_date,
  end_date,
}: Pick<IGetAllArgs, "location" | "start_date" | "end_date">) => {
  return useQuery(
    ["EXPORT_DATA", location, start_date, end_date],
    () => getRealTimeData({ location, start_date, end_date }),
    {
      keepPreviousData: true,
      retry: false,
    }
  );
};

export default useGetRealTimeData;
