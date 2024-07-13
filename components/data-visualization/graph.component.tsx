import { Line } from "react-chartjs-2";
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

import { categoriesData } from "../../data/categories";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

//change these to the values needed for the design
// defaults.plugins.title.font= {size: 20};
// defaults.plugins.title.color = "blue";

interface PropertyData {
  title: string;
  labels: string[];
  values: number[];
  actualValues?: number[]; // Optional property
  xLabel: string;
  yLabel: string;
}

interface IProperty {
  name: string;
  data: PropertyData;
}

interface ICategory {
  category: string;
  properties: IProperty[];
}

const Graph = ({
  categoryName,
  propertyName,
}: {
  categoryName: string;
  propertyName: string;
}) => {
  const category = categoriesData?.find(
    (category) => category.category === categoryName
  );
  const data = category?.properties.find(
    (property) => property.name === propertyName
  );

  const label = data?.data.labels;
  const values = data?.data.actualValues;

    // console.log("data:", label);

  return (
    <GraphContainer>
      
      <Line
        data={{
          labels: label as string[],
          datasets: [
            {
              label: data?.data.subtitle,
              data: values,
              borderColor: 'rgba(0, 153, 255, 0.5',
              borderWidth: 2,
              fill: true,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            subtitle: {
              display: true,
              text: data?.data.subtitle,
            },
            legend: {
               display: false,
               
            },
          },
          
          
          scales: {
            x: {
              title: {
                display: true,
                text: data?.data.xLabel,

                font:{
                  size: 12,
                }
              },
            },
            y: {
              title: {
                display: true,
                text: data?.data.yLabel,

                font:{
                  size: 12,
                }
              },
             
              ticks: {
                stepSize: 1,
              },
              min: 23,
              max: 29,
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


