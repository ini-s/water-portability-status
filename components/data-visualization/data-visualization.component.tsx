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
  LabelContainer,
  ActualColor,
  PredictedColor,
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

const propertyDisplayNames: { [key: string]: string } = {
  temperature: "Temperature",
  total_dissolved_solids: "Total Dissolved Solids",
  salinity: "Salinity",
  electrical_conductivity: "Electrical Conductivity",
  specific_gravity: "Specific Gravity",
  ph: "pH",
};

const DataVisualization = ({ waterData }: DataVisualizationProps) => {
  const [isActive, setIsActive] = useState("physical");
  const [isActiveProperty, setIsActiveProperty] = useState("temperature");
  const [subHeading, setSubHeading] = useState("Temperature Levels over Time");
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

  const handlePropertyState = (propertyKey: string) => {
    setIsActiveProperty(propertyKey);
    setPropertyHeading(propertyDisplayNames[propertyKey]);
    setSubHeading(`${propertyDisplayNames[propertyKey]} Data over Time`);
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

  useEffect(() => {
    const isSoftSensorActive =
      showSoftSensor[isActiveProperty as keyof ShowSoftSensorState];
    if (isSoftSensorActive) {
      setPropertyHeading(`${propertyDisplayNames[isActiveProperty]} Soft Sensor View`);
      setSubHeading(`Actual vs Predicted ${propertyDisplayNames[isActiveProperty]} Values over Time`);
    } else {
      setPropertyHeading(propertyDisplayNames[isActiveProperty]);
      setSubHeading(`${propertyDisplayNames[isActiveProperty]} Data over Time`);
    }
  }, [isActiveProperty, showSoftSensor]);

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

      <SubTitle>{subHeading}</SubTitle>
      {showSoftSensor[isActiveProperty as keyof ShowSoftSensorState] && (
        <LabelContainer>
          <ActualColor></ActualColor>
          <span>Actual {propertyDisplayNames[isActiveProperty]}</span>
          <PredictedColor></PredictedColor>
          <span>Predicted {propertyDisplayNames[isActiveProperty]}</span>
        </LabelContainer>
      )}

      <GraphBody>
        <PropertySelectionButtons style={getDivStyle()}>
          {isActive === "physical" && (
            <>
              <button
                style={getButtonStyle(isActiveProperty === "temperature")}
                onClick={() =>
                  handlePropertyState("temperature")
                }>
                Temperature
              </button>
              <button
                style={getButtonStyle(
                  isActiveProperty === "total_dissolved_solids"
                )}
                onClick={() =>
                  handlePropertyState("total_dissolved_solids")
                }>
                Total Dissolved Solids
              </button>
              <button
                style={getButtonStyle(isActiveProperty === "salinity")}
                onClick={() => handlePropertyState("salinity")}>
                Salinity
              </button>
              <button
                style={getButtonStyle(
                  isActiveProperty === "electrical_conductivity"
                )}
                onClick={() =>
                  handlePropertyState("electrical_conductivity")
                }>
                Electrical Conductivity
              </button>
              <button
                style={getButtonStyle(isActiveProperty === "specific_gravity")}
                onClick={() =>
                  handlePropertyState("specific_gravity")
                }>
                Specific Gravity
              </button>
            </>
          )}
          {isActive === "chemical" && (
            <>
              <button
                style={getButtonStyle(isActiveProperty === "ph")}
                onClick={() => handlePropertyState("ph")}>
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
      </GraphBody>

      <Softsensor>
        {(isActiveProperty === "temperature" || isActiveProperty === "ph") && (
          <button onClick={handleSoftSensor}>
            {showSoftSensor[isActiveProperty as keyof ShowSoftSensorState]
              ? "Exit Soft Sensor View"
              : "View Soft Sensor"}
          </button>
        )}
      </Softsensor>
    </DataVisualizationContainer>
  );
};

export default DataVisualization;
