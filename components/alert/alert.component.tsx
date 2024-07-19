import { useRouter } from "next/router";
import { useState } from "react";

import { AlertContainer } from "../../styles/alert.styles";

import useAddLocation from "../../server-store/mutations/useAddLocation";

import { getLocationFromQuery } from "../../server-store/queries/queries";
import { IGetAllArgs } from "../../server-store/queries/useGetNotifications";

const Alert = ({ isSafe }: { isSafe: boolean }) => {
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

  //NOTE: Instructions for Ginika
  //Pass realTimeData as a prop into modal component
  //Give it the same type as i did for waterParameters component waterQualityData and then map through it do display the data
  //Use WaterParameters component as a guide

  return (
    <AlertContainer>
      <p>Report at 21/06/2024 09:00</p>
      <h1>ALERT</h1>
      <p style={{ color: isSafe ? "rgba(4, 155, 1, 1)" : "rgb(226, 3, 3)" }}>
        {!isSafe ? (
          <>
            pH is not within acceptable range
            <br />
            Temperature is not within acceptable range
            <br />
            Specific Gravity is not within acceptable range
            <br />
            Total Dissolved Solids is not within acceptable range
            <br />
            Salinity is not within acceptable range
            <br />
            Electrical Conductivity is not within acceptable range
          </>
        ) : (
          <>
            pH is within acceptable range
            <br />
            Temperature is within acceptable range
            <br />
            Specific Gravity is within acceptable range
            <br />
            Total Dissolved Solids is within acceptable range
            <br />
            Salinity is within acceptable range
            <br />
            Electrical Conductivity is within acceptable range
          </>
        )}
      </p>
      <button disabled={!location} onClick={getRealTimeData}>
        Get Real-time Data
      </button>
    </AlertContainer>
  );
};

export default Alert;
