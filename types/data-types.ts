export interface PropertyData {
  subtitle: string;
  labels: string[];
  actualValues: number[]; // Optional property
  xLabel: string;
  yLabel: string;
}

export interface IProperty {
  name: string;
  data: PropertyData;
}

export interface ICategory {
  category: string;
  properties: IProperty[];
}
