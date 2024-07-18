import { NextPageWithLayout } from "./_app";
import GeneralLayout from "../layouts/general-layout";
import SafetyScreen from "../components/safety-screen/safety-screen.component";
import WaterParameters from "../components/water-parameters/water-parameters.component";
import Alert from "../components/alert/alert.component";

import {
  PageContainer,
  WaterParametersContainer,
  AlertContainer,
} from "../styles/id.styles";

const LocationPage: NextPageWithLayout = () => {
  return (
    <div>
      <SafetyScreen />
      <PageContainer>
        <AlertContainer>
          <Alert />
        </AlertContainer>
        <WaterParametersContainer>
          <WaterParameters />
        </WaterParametersContainer>
      </PageContainer>
    </div>
  );
};

LocationPage.getLayout = (page) => {
  return <GeneralLayout pageTitle="location">{page}</GeneralLayout>;
};

export default LocationPage;
