import { api } from "../utils";

import { useMutation, useQueryClient } from "@tanstack/react-query";

interface AddLocationArg {
  data: string;
}

const addLocation = async (data: AddLocationArg) => {
  const response = await api.post("/water-quality-data", data);
  return response.data.data;
};

const useAddLocation = () => {
  const queryClient = useQueryClient();

  return useMutation(addLocation)
//     , {
//     mutationKey: ["ADD_LOCATION"],
//   }
// );
};

export default useAddLocation;
