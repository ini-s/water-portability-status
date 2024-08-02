import { useRouter } from "next/router";
import { useState } from "react";
import dayjs from "dayjs";

import {
  AlertContainer,
  AlertHeading,
  AlertText,
  SafeBox,
  UnSafeBox,
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
        {isSafe ? (
          <SafeBox>
            {currentWaterData.ph >= 6.5 && currentWaterData.ph <= 9.5 && (
              <p>pH is within acceptable range </p>
            )}
            {currentWaterData.temperature >= 10 &&
              currentWaterData.temperature <= 22 && (
                <p>Temperature is within acceptable range</p>
              )}
            {currentWaterData.specific_gravity >= 0.998 &&
              currentWaterData.specific_gravity <= 1.002 && (
                <p> Specific Gravity is within acceptable range </p>
              )}

            {currentWaterData.total_dissolved_solids >= 50 &&
              currentWaterData.total_dissolved_solids <= 599 && (
                <p>Total Dissolved Solids is within acceptable range</p>
              )}
            {currentWaterData.salinity < 500 && (
              <p>Salinity is within acceptable range </p>
            )}
            {currentWaterData.electrical_conductivity >= 200 &&
              currentWaterData.electrical_conductivity <= 800 && (
                <p>Electrical Conductivity is within acceptable range </p>
              )}
          </SafeBox>
        ) : (
          <UnSafeBox>
            {currentWaterData.ph < 6.5 && currentWaterData.ph > 9.5 && (
              <p>pH is not within acceptable range </p>
            )}
            {currentWaterData.temperature < 10 &&
              currentWaterData.temperature > 22 && (
                <p>Temperature is not within acceptable range</p>
              )}
            {currentWaterData.specific_gravity < 0.998 &&
              currentWaterData.specific_gravity > 1.002 && (
                <p> Specific Gravity is not within acceptable range </p>
              )}

            {currentWaterData.total_dissolved_solids < 50 &&
              currentWaterData.total_dissolved_solids > 599 && (
                <p>Total Dissolved Solids is not within acceptable range</p>
              )}
            {currentWaterData.salinity > 500 && (
              <p>Salinity is not within acceptable range </p>
            )}
            {currentWaterData.electrical_conductivity < 200 &&
              currentWaterData.electrical_conductivity > 800 && (
                <p>Electrical Conductivity is not within acceptable range </p>
              )}
          </UnSafeBox>
        )}
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
