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
  Title,
  SubTitle
} from "../../styles/data-visualization.styles";

const DataVisualizationPage: NextPageWithLayout = () => {
  const [isActive, setIsActive] = useState("physical"); 
  const [activeProperty, setActiveProperty] = useState("temperature");
  const [propertyHeading, setPropertyHeading] = useState("Temperature")


  const handleActiveState = (state: string) => {
    setIsActive(state);
    if (state === "physical") {
      setActiveProperty("temperature");
      setPropertyHeading("Temperature");
    } else if (state === "chemical") {
      setActiveProperty("ph");
      setPropertyHeading("pH");
    }
  };

  const handlePropertyActiveState = (property: string) => {
    setActiveProperty(property);
  };

  const headingPropertyActivate = (heading: string) =>{
    setPropertyHeading(heading)
  }

  const getButtonStyle = (isActive: boolean) => {
    return {
      backgroundColor: isActive ? "rgb(var(--color-white))" : "rgb(var(--color-light-blue))",
     
    };
  };

  const getDivStyle = () => {
    switch (isActive) {
      case "chemical":
        return { height: "4rem", transition: "height 0.5s ease", }; // Reduce height
      default:
        return {transition: "height 0.5s ease" }; // Default height
      
    }
  };

  return (
    <DataVisualizationContainer>
      <CategorySelectionButtons>
        <button 
          style={getButtonStyle(isActive === "physical")} 
          onClick={() => (handleActiveState("physical") )}
        >
          Physical
        </button>

        <button 
          style={getButtonStyle(isActive === "chemical")}
          onClick={() => handleActiveState("chemical")}
        >
          Chemical
        </button> 
      </CategorySelectionButtons>
      <Title>{propertyHeading}</Title>
      <SubTitle>{propertyHeading} levels over time </SubTitle>
      
      <div >
        <PropertySelectionButtons style={getDivStyle()}>
          
          {isActive === "physical" && (
            <>
              <button
                style={getButtonStyle(activeProperty === "temperature")}
                onClick={() => (handlePropertyActiveState("temperature"), headingPropertyActivate("temperature"))}
              >
                Temperature
              </button>

              <button
                style={getButtonStyle(activeProperty === "totalDissolvedSolids")}
                onClick={() => (handlePropertyActiveState("totalDissolvedSolids") ,headingPropertyActivate("total dissolved solids"))}
              >
                Total Dissolved Solids
              </button>

              <button
                style={getButtonStyle(activeProperty === "salinity")}
                onClick={() => (handlePropertyActiveState("salinity"), headingPropertyActivate("salinity"))}
              >
                Salinity
              </button>

              <button
                style={getButtonStyle(activeProperty === "electricalConductivity")}
                onClick={() => (handlePropertyActiveState("electricalConductivity"), headingPropertyActivate("electrical conductivity"))}
              >
                Electrical Conductivity
              </button>
              
              <button
                style={getButtonStyle(activeProperty === "specificGravity")}
                onClick={() =>( handlePropertyActiveState("specificGravity"), headingPropertyActivate("specific gravity"))}
              >
                Specific Gravity
              </button>
            </>
          )}
          {isActive === "chemical" && (
            <>
                <button
                style={getButtonStyle(activeProperty === "ph") }
                onClick={() => (handlePropertyActiveState("ph"), headingPropertyActivate("ph"))}
              >
                pH
              </button>
            </>
          )}
        </PropertySelectionButtons>

        <Graph categoryName={isActive} propertyName="temperature" />
      </div>
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
