import { useRouter } from "next/router";
import { useState } from "react";

import { AlertContainer } from "../../styles/alert.styles";

import useAddLocation from "../../server-store/mutations/useAddLocation";

import { getLocationFromQuery } from "../../server-store/queries/queries";
import { IGetAllArgs } from "../../server-store/queries/useGetNotifications";

const Alert = () => {
  const [realTimeData, setRealTimeData] = useState<IGetAllArgs | null>();

  const router = useRouter();
  const { location } = router.query;

  const queryLocation = getLocationFromQuery(location);

  const { mutateAsync: addLocation, isLoading, error } = useAddLocation();

  const getRealTimeData = async () => {
    await addLocation(queryLocation, {
      onSuccess: (dt) => setRealTimeData(dt),
    });
  };

  console.log(realTimeData);

  return (
    <AlertContainer>
      <button disabled={!location} onClick={getRealTimeData}>
        real time date
      </button>
    </AlertContainer>
  );
};

export default Alert;
