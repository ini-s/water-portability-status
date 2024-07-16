import { useEffect, useState } from "react";

import WaterParameters from "../../components/water-parameters/water-parameters.component";
import Alert from "../../components/alert/alert.component";
import Graph from "../../components/data-visualization/graph.component";

import {
  CategorySelectionButtons,
  DataVisualizationContainer,
  PropertySelectionButtons,
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
  const [showSoftSensor, setShowSoftSensor] = useState<ShowSoftSensorState>({
    temperature: false,
    ph: false,
  });

  const handleActiveState = (state: string) => {
    setIsActive(state);
  };

  const handlePropertyState = (state: string) => {
    setIsActiveProperty(state);
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
    }
    else {
      setIsActiveProperty("temperature")
    }
  }, [isActive]);

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
            <button onClick={() => handlePropertyState("temperature")}>
              Temperature
            </button>
            <button
              onClick={() => handlePropertyState("total_dissolved_solids")}
            >
              Total Dissolved
            </button>
            <button onClick={() => handlePropertyState("salinity")}>
              Salinity
            </button>
            <button
              onClick={() => handlePropertyState("electrical_conductivity")}
            >
              Electrical Conductivity
            </button>
            <button onClick={() => handlePropertyState("specific_gravity")}>
              Specific Gravity
            </button>
          </>
        )}
        {isActive === "chemical" && (
          <>
            <button onClick={() => handlePropertyState("ph")}>pH</button>
          </>
        )}
      </PropertySelectionButtons>

      <Graph
        propertyName={isActiveProperty}
        data={currentProperty?.data || propertyDataDefaultValues}
        showSoftSensor={
          showSoftSensor[isActiveProperty as keyof ShowSoftSensorState] || false
        }
        predictionLogs={predictionLogs}
      />

      {(isActiveProperty === "temperature" || isActiveProperty === "ph") && (
        <button onClick={handleSoftSensor}>
          {showSoftSensor[isActiveProperty as keyof ShowSoftSensorState]
            ? "exit soft sensor view"
            : "view soft sensor"}
        </button>
      )}

      <div>
        <WaterParameters />
        <Alert />
      </div>
    </DataVisualizationContainer>
  );
};
export default DataVisualization;
