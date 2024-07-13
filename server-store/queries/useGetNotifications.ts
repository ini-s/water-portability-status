import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { api } from "../utils";

export interface IGetAllArgs {
  location: string;
  size: number;
  page: number;
  start_date?: string;
  end_date?: string;
}

const getNotifications = async ({
  location,
  size,
  page,
  start_date,
  end_date,
}: IGetAllArgs) => {
  const params: Record<string, any> = {
    location,
    size,
    page,
  };

  if (start_date) {
    params.start_date = start_date;
  }

  if (end_date) {
    params.end_date = end_date;
  }

  const response = await api.get("/notifications", { params });

  // console.log(response.data.data)

  return response.data.data;
};

const useGetNotifications = ({
  location = "",
  size = 10,
  page = 1,
  start_date,
  end_date,
}: IGetAllArgs) => {
  return useQuery(
    ["GET_NOTIFICATIONS", location, size, page, start_date, end_date],
    () => getNotifications({ location, size, page, start_date, end_date }),
    { keepPreviousData: true }
  );
};

export default useGetNotifications;
