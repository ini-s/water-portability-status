import { Line, Scatter } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  defaults,
  Chart as ChartJS,
  Ticks,
} from "chart.js";

import { GraphContainer } from "../../styles/graph.styles";

import { IPredictionLogs, PropertyData } from "../../types/data-types";
import { type } from "os";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

//change these to the values needed for the design
// defaults.plugins.title.font= {size: 20};
// defaults.plugins.title.color = "blue";

interface GraphProps {
  propertyName: string;
  data: PropertyData;
  showSoftSensor: boolean;
  predictionLogs: IPredictionLogs[];
}

const Graph = ({
  propertyName,
  data,
  showSoftSensor,
  predictionLogs,
}: GraphProps) => {
  console.log(predictionLogs);
  console.log(data.values);

  const predictionValues = predictionLogs.map((item) => {
    switch (propertyName) {
      case "temperature":
        return item.temperature;
      case "ph":
        return item.ph;
      default:
        return null;
    }
  });

  return (
    <GraphContainer>
      <Line
        data={{
          labels: data.labels,
          datasets: [
            {
              borderColor: "rgba(0, 153, 255, 0.5)",
              pointBackgroundColor: "rgba(0, 153, 255, 0.5)",
              borderWidth: 2,
              fill: true,
              label: data.subtitle,
              data: data.values,
            },
            ...(showSoftSensor
              ? [
                  {
                    label: propertyName,
                    data: predictionValues,
                    borderColor: "red",
                    showLine: false,
                    pointBackgroundColor: "red",
                    pointBorderColor: "red",
                  },
                ]
              : []),
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            subtitle: {
              display: true,
              text: data.subtitle,
            },
            legend: {
              display: false,
            },
          },

          scales: {
            x: {
              title: {
                display: true,
                text: data.xLabel,
                font: {
                  size: 12,
                },
              },
            },
            y: {
              title: {
                display: true,
                text: data.yLabel,
                font: {
                  size: 12,
                },
              },

              ticks: {
                stepSize: 1,
              },
              min: data.min,
              max: data.max,
            },
          },
        }}
      />
    </GraphContainer>
  );
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default Graph;
