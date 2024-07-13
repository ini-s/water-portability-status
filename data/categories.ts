import { ICategory } from "../types/data-types";

export const categoriesData: ICategory[] = [
  {
    category: "physical",
    properties: [
      {
        name: "temperature",
        data: {
          subtitle: "temperature levels over time",
          labels: ["25/11/05", "24/11/02", "23/11/01", "22/5/23", "15/2/33"],
          actualValues: [25.5, 24, 26.6, 23.5, 28.5],
          xLabel: "date time",
          yLabel: "temperature(°c)",
        },
      },
      {
        name: "total dissolved solids",
        data: {
          subtitle: "temperature levels over time",
          labels: ["25/11/05", "24/11/02", "23/11/01"],
          actualValues: [20, 25.5, 24, 26.6, 21],
          xLabel: "date time",
          yLabel: "TDS(mg/mL)",
        },
      },
    ],
  },
  {
    category: "chemical",
    properties: [
      {
        name: "",
        data: {
          subtitle: "",
          labels: ["25/11/05", "24/11/02", "23/11/01"],
          actualValues: [20, 25.5, 24, 26.6, 21],
          xLabel: "",
          yLabel: "",
        },
      },
    ],
  },
  {
    category: "biological",
    properties: [
      {
        name: "",
        data: {
          subtitle: "",
          labels: ["25/11/05", "24/11/02", "23/11/01"],
          actualValues: [20, 25.5, 24, 26.6, 21],
          xLabel: "",
          yLabel: "",
        },
      },
    ],
  },
];
