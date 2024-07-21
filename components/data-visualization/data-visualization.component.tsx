/* eslint-disable react/jsx-no-undef */
import { useEffect, useState } from "react";

import Graph from "./graph.component";
import Alert from "../alert/alert.component";
import Spinner from "../spinner-component/spinner-component";

import {
  CategorySelectionButtons,
  DataVisualizationContainer,
  PropertySelectionButtons,
  Title,
  SubTitle,
  GraphBody,
  Softsensor,
} from "../../styles/data-visualization.styles";

import { IWaterData } from "../../types/data-types";

import { mapApiDataToCategories } from "../../data/categoriesData";

interface DataVisualizationProps {
  waterData: IWaterData[];
}

type ShowSoftSensorState = {
  temperature: boolean;
  ph: boolean;
};

const propertyDataDefaultValues = {
  subtitle: "",
  labels: [],
  values: [],
  xLabel: "",
  yLabel: "",
  min: 0,
  max: 10,
  step: 1,
};

const DataVisualization = ({ waterData }: DataVisualizationProps) => {
  const [isActive, setIsActive] = useState("physical");
  const [isActiveProperty, setIsActiveProperty] = useState("temperature");
  const [propertyHeading, setPropertyHeading] = useState("Temperature");
  const [showSoftSensor, setShowSoftSensor] = useState<ShowSoftSensorState>({
    temperature: false,
    ph: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const handleActiveState = (state: string) => {
    setIsActive(state);
    if (state === "chemical") {
      setIsActiveProperty("ph");
      setPropertyHeading("pH");
    } else {
      setIsActiveProperty("temperature");
      setPropertyHeading("Temperature");
    }
  };

  const handlePropertyState = (state: string, heading: string) => {
    setIsActiveProperty(state);
    setPropertyHeading(heading);
  };

  const getButtonStyle = (isActive: boolean) => {
    return {
      backgroundColor: isActive
        ? "rgb(var(--color-white))"
        : "rgb(var(--color-light-blue))",
    };
  };

  const getDivStyle = () => {
    switch (isActive) {
      case "chemical":
        return { height: "5rem", transition: "height 0.5s ease" };
      default:
        return { transition: "height 0.5s ease" };
    }
  };

  const predictionLogs = waterData.map((item) => item.prediction_log);

  const categoriesData = mapApiDataToCategories(waterData);

  const currentCategory = categoriesData.find(
    (category) => category.category === isActive
  );

  const currentProperty = currentCategory?.properties.find(
    (property) => property.name === isActiveProperty
  );

  const handleSoftSensor = () => {
    setShowSoftSensor((prev) => ({
      ...prev,
      [isActiveProperty as keyof ShowSoftSensorState]:
        !prev[isActiveProperty as keyof ShowSoftSensorState],
    }));
  };

  useEffect(() => {
    if (isActive === "chemical") {
      setIsActiveProperty("ph");
      setPropertyHeading("pH");
    } else {
      setIsActiveProperty("temperature");
      setPropertyHeading("Temperature");
    }
  }, [isActive]);

  return (
    <DataVisualizationContainer>
      <CategorySelectionButtons>
        <button
          style={getButtonStyle(isActive === "physical")}
          onClick={() => handleActiveState("physical")}>
          Physical
        </button>
        <button
          style={getButtonStyle(isActive === "chemical")}
          onClick={() => handleActiveState("chemical")}>
          Chemical
        </button>
      </CategorySelectionButtons>
      <Title>{propertyHeading}</Title>
      <SubTitle>{propertyHeading} Levels over Time</SubTitle>
      <GraphBody>
        <PropertySelectionButtons style={getDivStyle()}>
          {isActive === "physical" && (
            <>
              <button
                style={getButtonStyle(isActiveProperty === "temperature")}
                onClick={() =>
                  handlePropertyState("temperature", "temperature")
                }>
                Temperature
              </button>
              <button
                style={getButtonStyle(
                  isActiveProperty === "total_dissolved_solids"
                )}
                onClick={() =>
                  handlePropertyState(
                    "total_dissolved_solids",
                    "total dissolved solids"
                  )
                }>
                Total Dissolved
              </button>
              <button
                style={getButtonStyle(isActiveProperty === "salinity")}
                onClick={() => handlePropertyState("salinity", "salinity")}>
                Salinity
              </button>
              <button
                style={getButtonStyle(
                  isActiveProperty === "electrical_conductivity"
                )}
                onClick={() =>
                  handlePropertyState(
                    "electrical_conductivity",
                    "electrical conductivity"
                  )
                }>
                Electrical Conductivity
              </button>
              <button
                style={getButtonStyle(isActiveProperty === "specific_gravity")}
                onClick={() =>
                  handlePropertyState("specific_gravity", "specific gravity")
                }>
                Specific Gravity
              </button>
            </>
          )}
          {isActive === "chemical" && (
            <>
              <button
                style={getButtonStyle(isActiveProperty === "ph")}
                onClick={() => handlePropertyState("ph", "PH")}>
                pH
              </button>
            </>
          )}
        </PropertySelectionButtons>
        <SubTitle>{propertyHeading} over Time</SubTitle>
        <PropertySelectionButtons style={getDivStyle()}>
          {isActive === "physical" && (
            <>
              <button
                style={getButtonStyle(isActiveProperty === "temperature")}
                onClick={() =>
                  handlePropertyState("temperature", "temperature")
                }>
                Temperature
              </button>
              <button
                style={getButtonStyle(
                  isActiveProperty === "total_dissolved_solids"
                )}
                onClick={() =>
                  handlePropertyState(
                    "total_dissolved_solids",
                    "total dissolved solids"
                  )
                }>
                Total Dissolved
              </button>
              <button
                style={getButtonStyle(isActiveProperty === "salinity")}
                onClick={() => handlePropertyState("salinity", "salinity")}>
                Salinity
              </button>
              <button
                style={getButtonStyle(
                  isActiveProperty === "electrical_conductivity"
                )}
                onClick={() =>
                  handlePropertyState(
                    "electrical_conductivity",
                    "electrical conductivity"
                  )
                }>
                Electrical Conductivity
              </button>
              <button
                style={getButtonStyle(isActiveProperty === "specific_gravity")}
                onClick={() =>
                  handlePropertyState("specific_gravity", "specific gravity")
                }>
                Specific Gravity
              </button>
            </>
          )}
          {isActive === "chemical" && (
            <>
              <button
                style={getButtonStyle(isActiveProperty === "ph")}
                onClick={() => handlePropertyState("ph", "PH")}>
                pH
              </button>
            </>
          )}
        </PropertySelectionButtons>

        <Graph
          propertyName={isActiveProperty}
          data={currentProperty?.data || propertyDataDefaultValues}
          showSoftSensor={
            showSoftSensor[isActiveProperty as keyof ShowSoftSensorState] ||
            false
          }
          predictionLogs={predictionLogs}
        />

        <Graph
          propertyName={isActiveProperty}
          data={currentProperty?.data || propertyDataDefaultValues}
          showSoftSensor={
            showSoftSensor[isActiveProperty as keyof ShowSoftSensorState] ||
            false
          }
          predictionLogs={predictionLogs}
        />
      </GraphBody>

      <Softsensor>
        {(isActiveProperty === "temperature" || isActiveProperty === "ph") && (
          <button onClick={handleSoftSensor}>
            {showSoftSensor[isActiveProperty as keyof ShowSoftSensorState]
              ? "exit soft sensor view"
              : "view soft sensor"}
          </button>
        )}
      </Softsensor>
    </DataVisualizationContainer>
  );
};

export default DataVisualization;
