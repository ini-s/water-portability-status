import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { NextPageWithLayout } from "./_app";

import GeneralLayout from "../layouts/general-layout";

import SafetyScreen from "../components/safety-screen/safety-screen.component";
import WaterParameters from "../components/water-parameters/water-parameters.component";

import useGetWaterQualityData from "../server-store/queries/useGetWaterQualityData";

import { getLocationFromQuery } from "../server-store/queries/queries";

import DataVisualization from "../components/data-visualization/data-visualization.component";
import Alert from "../components/alert/alert.component";

import { WaterPortabilityScreen } from "../styles/water-quality-data.styles";

const LocationPage: NextPageWithLayout = () => {
  const [isSafe, setIsSafe] = useState(false);

  const router = useRouter();
  const { query } = router;

  const queryLocation = getLocationFromQuery(query.location);
  const size = 8;

  const { data, isInitialLoading, isFetching, isPreviousData } =
    useGetWaterQualityData({ location: queryLocation, size });

  const waterQualityData = data || [];

  const waterData = data && data.length > 0 ? data[0] : null;

  useEffect(() => {
    if (waterData?.prediction_log.potability === true) {
      setIsSafe(true);
    } else {
      setIsSafe(false);
    }
  }, [waterData?.prediction_log.potability, isSafe]);

  const isDataVisualization = query.dataVisualization === "true";

  const isPortable = waterData?.prediction_log.potability ?? false;

  return (
    <WaterPortabilityScreen>
      {!isDataVisualization ? (
        <SafetyScreen isSafe={isPortable} />
      ) : (
        <DataVisualization waterData={waterQualityData} />
      )}
      <div>
        <Alert isSafe={isPortable} currentWaterData={waterData} />
        <WaterParameters waterQualityData={waterQualityData} />
      </div>
    </WaterPortabilityScreen>
  );
};

LocationPage.getLayout = (page) => {
  return <GeneralLayout pageTitle="location">{page}</GeneralLayout>;
};

export default LocationPage;
