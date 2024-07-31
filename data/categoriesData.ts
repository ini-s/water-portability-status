import dayjs from "dayjs";

import { ICategory, IWaterData } from "../types/data-types";

export const mapApiDataToCategories = (data: IWaterData[]): ICategory[] => {
  const categories: ICategory[] = [
    {
      category: "physical",
      properties: [
        {
          name: "temperature",
          data: {
            subtitle: "Temperature levels over time",
            labels: data.map((item) =>
              dayjs(item.created_at).format("MM/DD/YYYY HH:mm")
            ),
            values: data.map((item) => item.temperature),
            xLabel: "Date Time",
            yLabel: "Temperature (°C)",
            min: Math.min(...data.map((item) => item.temperature)) - 1,
            max: Math.max(...data.map((item) => item.temperature)) + 1,
            step: 1,
          },
        },
        {
          name: "total_dissolved_solids",
          data: {
            subtitle: "Total Dissolved Solids (TDS) levels over time",
            labels: data.map((item) =>
              dayjs(item.created_at).format("MM/DD/YYYY HH:mm")
            ),
            values: data.map((item) => item.total_dissolved_solids),
            xLabel: "Date Time",
            yLabel: "TDS (ppm)",
            min:
              Math.min(...data.map((item) => item.total_dissolved_solids)) - 1,
            max:
              Math.max(...data.map((item) => item.total_dissolved_solids)) + 1,
            step: 1,
          },
        },
        {
          name: "salinity",
          data: {
            subtitle: "Salinity levels over time",
            labels: data.map((item) =>
              dayjs(item.created_at).format("MM/DD/YYYY HH:mm")
            ),
            values: data.map((item) => item.salinity),
            xLabel: "Date Time",
            yLabel: "Salinity (ppm)",
            min: Math.min(...data.map((item) => item.salinity)) - 1,
            max: Math.max(...data.map((item) => item.salinity)) + 1,
            step: 1,
          },
        },
        {
          name: "electrical_conductivity",
          data: {
            subtitle: "Electrical Conductivity (EC) levels over time",
            labels: data.map((item) =>
              dayjs(item.created_at).format("MM/DD/YYYY HH:mm")
            ),
            values: data.map((item) => item.electrical_conductivity),
            xLabel: "Date Time",
            yLabel: "(uS/cm)",
            min:
              Math.min(...data.map((item) => item.electrical_conductivity)) - 1,
            max:
              Math.max(...data.map((item) => item.electrical_conductivity)) + 1,
            step: 0.1,
          },
        },
        {
          name: "specific_gravity",
          data: {
            subtitle: "Specific Gravity levels over time",
            labels: data.map((item) =>
              dayjs(item.created_at).format("MM/DD/YYYY HH:mm")
            ),
            values: data.map((item) => item.specific_gravity),
            xLabel: "Date Time",
            yLabel: "Specific Gravity",
            min: Math.min(...data.map((item) => item.specific_gravity)) - 0.01,
            max: Math.max(...data.map((item) => item.specific_gravity)) + 0.01,
            step: 0.01,
          },
        },
      ],
    },
    {
      category: "chemical",
      properties: [
        {
          name: "ph",
          data: {
            subtitle: "pH levels over time",
            labels: data.map((item) =>
              dayjs(item.created_at).format("MM/DD/YYYY HH:mm")
            ),
            values: data.map((item) => item.ph),
            xLabel: "Date Time",
            yLabel: "pH Value",
            min: Math.min(...data.map((item) => item.ph)),
            max: Math.max(...data.map((item) => item.ph)) + 1,
            step: 1,
          },
        },
      ],
    },
  ];

  return categories;
};
