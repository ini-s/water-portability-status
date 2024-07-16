import { useQuery } from "@tanstack/react-query";

import { api } from "../utils";

import { IGetAllArgs } from "./useGetNotifications";

const getWaterQualityData = async ({
  location,
  size,
}: Pick<IGetAllArgs, "location" | "size">) => {
  const params = {
    location,
    size,
  };
  const response = await api.get("/water-quality-data", { params });

  return response.data.data;
};

const useGetWaterQualityData = ({
  location = "",
  size = 8,
}: Pick<IGetAllArgs, "location" | "size">) => {
  return useQuery(
    ["GET_WATER_QUALITY_DATA", location, size],
    () => getWaterQualityData({ location, size }),
    { keepPreviousData: true }
  );
};

export default useGetWaterQualityData;
