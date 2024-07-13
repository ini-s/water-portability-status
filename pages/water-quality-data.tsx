import { NextPageWithLayout } from "./_app";

import GeneralLayout from "../layouts/general-layout";

import SafetyScreen from "../components/safety-screen/safety-screen.component";
import WaterParameters from "../components/water-parameters/water-parameters.component";
import { AlertContainer } from "../styles/alert.styles";

const LocationPage: NextPageWithLayout = () => {
  return (
    <div>
      <SafetyScreen></SafetyScreen>
      <div>
        <WaterParameters />
        <AlertContainer />
      </div>
    </div>
  );
};

LocationPage.getLayout = (page) => {
  return <GeneralLayout pageTitle="location">{page}</GeneralLayout>;
};

export default LocationPage;
