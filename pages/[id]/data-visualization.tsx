import { useState } from "react";

import GeneralLayout from "../../layouts/general-layout";

import { NextPageWithLayout } from "../_app";

import WaterParameters from "../../components/water-parameters/water-parameters.component";
import Alert from "../../components/alert/alert.component";
import Graph from "../../components/data-visualization/graph.component";

import {
  CategorySelectionButtons,
  DataVisualizationContainer,
  PropertySelectionButtons,
} from "../../styles/data-visualization.styles";

const DataVisualizationPage: NextPageWithLayout = () => {
  const [isActive, setIsActive] = useState("physical"); //remove blue color if not active
  // const [activeProperty, setActiveProperty] = useState("temperature");

  const handleActiveState = (state: string) => {
    setIsActive(state);
  };

  // const handlePropertyActiveState = () => {

  // };

  return (
    <DataVisualizationContainer>
      <CategorySelectionButtons>
        <button onClick={() => handleActiveState("physical")}>Physical</button>
        <button onClick={() => handleActiveState("chemical")}>Chemical</button>
        <button onClick={() => handleActiveState("biological")}>
          Biological
        </button>
      </CategorySelectionButtons>
      <PropertySelectionButtons>
        {isActive === "physical" && (
          <>
            <button>Temperature</button>
            <button>Total Dissolved</button>
            <button>Salinity</button>
            <button>Electrical Conductivity</button>
            <button>Specific Gravity</button>
          </>
        )}
        {isActive === "chemical" && (
          <>
            <button>pH</button>
          </>
        )}
      </PropertySelectionButtons>

      <Graph categoryName={isActive} propertyName="temperature" />

      <div>
        <WaterParameters />
        <Alert />
      </div>
    </DataVisualizationContainer>
  );
};

DataVisualizationPage.getLayout = (page) => {
  return (
    <GeneralLayout pageTitle="location" exportData={true}>
      {page}
    </GeneralLayout>
  );
};

export default DataVisualizationPage;
