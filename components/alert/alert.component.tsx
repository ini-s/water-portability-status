
import { useRouter } from 'next/router';
import { useState } from 'react';
import dayjs from 'dayjs';

import { AlertContainer } from '../../styles/alert.styles';

import useAddLocation from '../../server-store/mutations/useAddLocation';

import { getLocationFromQuery } from '../../server-store/queries/queries';
import { IGetAllArgs } from '../../server-store/queries/useGetNotifications';
import { IWaterData } from '../../types/data-types';

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

  const router = useRouter();
  const { location } = router.query;

  const queryLocation = getLocationFromQuery(location);

  const { mutateAsync: addLocation, isLoading, error } = useAddLocation();

  const getRealTimeData = async () => {
    await addLocation(queryLocation, {
      onSuccess: (dt:any) => {
        setRealTimeData([dt]); 
        setIsModalOpen(true);
      },
    });
  };

  return (
    <AlertContainer>
      <p>
        Report at {dayjs(currentWaterData?.created_at).format('MM/DD/YYYY HH:mm')}
      </p>
      <h1>ALERT</h1>
      <p style={{ color: isSafe ? 'rgba(4, 155, 1, 1)' : 'rgb(226, 3, 3)' }}>
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
      <ModalComponent
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        waterQualityData={realTimeData}
      />
    </AlertContainer>
  );
};

export default Alert;

