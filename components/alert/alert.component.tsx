import { useRouter } from "next/router";
import { useState } from "react";
import dayjs from "dayjs";

import {
  AlertContainer,
  AlertHeading,
  AlertText,
} from "../../styles/alert.styles";

import useAddLocation from "../../server-store/mutations/useAddLocation";
import { getLocationFromQuery } from "../../server-store/queries/queries";

import { IWaterData } from "../../types/data-types";

import ModalComponent from "../modal/modal.component";

const Alert = ({
  isSafe,
  currentWaterData,
}: {
  isSafe: boolean;
  currentWaterData: IWaterData;
}) => {
  const [realTimeData, setRealTimeData] = useState<IWaterData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();
  const { location } = router.query;

  const queryLocation = getLocationFromQuery(location);

  const { mutateAsync: addLocation } = useAddLocation();

  const getRealTimeData = async () => {
    setIsModalOpen(true);
    setIsLoadingData(true);

    try {
      const dt = await addLocation(queryLocation);
      if (dt.status === "01") {
        setError(true);
      } else {
        setError(false);
        setRealTimeData([dt.data]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingData(false);
    }
  };

  return (
    <AlertContainer>
      <p>
        Report at{" "}
        {dayjs(currentWaterData?.created_at).format("MM/DD/YYYY HH:mm")}
      </p>
      <AlertText>
        <AlertHeading>ALERT</AlertHeading>
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
      </AlertText>

      <button disabled={!location} onClick={getRealTimeData}>
        Get Instant Real-time Data
      </button>
      <ModalComponent
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        waterQualityData={realTimeData}
        isLoading={isLoadingData}
        error={error}
      />
    </AlertContainer>
  );
};

export default Alert;
