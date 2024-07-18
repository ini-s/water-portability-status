import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

import { NextPageWithLayout } from "./_app";

import GeneralLayout from "../layouts/general-layout";

import SafetyScreen from "../components/safety-screen/safety-screen.component";
import WaterParameters from "../components/water-parameters/water-parameters.component";

import useGetWaterQualityData from "../server-store/queries/useGetWaterQualityData";

import { getLocationFromQuery } from "../server-store/queries/queries";

import DataVisualization from "../components/data-visualization/data-visualization.component";
import Alert from "../components/alert/alert.component";

const LocationPage: NextPageWithLayout = () => {
  const [isSafe, setIsSafe] = useState(false);

  const router = useRouter();
  const { query } = router;

  const queryLocation = getLocationFromQuery(query.location);
  const size = 8;

  const { data, isInitialLoading, isFetching, isPreviousData } =
    useGetWaterQualityData({ location: queryLocation, size });

  const waterQualityData = data || [];
  const waterData = useMemo(() => (data && data.length > 0 ? data[0] : null), [data]);

  useEffect(() => {
    if (waterData?.prediction_log.potability === true) {
      setIsSafe(true);
    } else {
      setIsSafe(false);
    }
  }, [waterData?.prediction_log.potability, isSafe]);

  const isDataVisualization = query.dataVisualization === "true";

  console.log(waterData?.prediction_log.potability);

  return (
    <div>
      {!isDataVisualization ? (
        <SafetyScreen />
      ) : (
        <DataVisualization waterData={waterQualityData} />
      )}
      <div>
        <WaterParameters />
        <Alert />
      </div>
    </div>
  );
};

LocationPage.getLayout = (page) => {
  return <GeneralLayout pageTitle="location">{page}</GeneralLayout>;
};

export default LocationPage;
