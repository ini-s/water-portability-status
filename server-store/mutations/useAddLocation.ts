import { IWaterData } from "../../types/data-types";

import { api } from "../utils";

import { useMutation } from "@tanstack/react-query";

type AddLocationArg = string;

interface ApiResponse {
  status: string;
  data: IWaterData;
  message: string;
}

const addLocation = async (data: AddLocationArg): Promise<ApiResponse> => {
  const response = await api.post(`/water-quality-data?location=${data}`, data);

  return response.data;
};

const useAddLocation = () => {
  return useMutation(addLocation, {
    mutationKey: ["ADD_LOCATION"],
  });
};

export default useAddLocation;
