export interface PropertyData {
  subtitle: string;
  labels: string[];
  values: number[];
  xLabel: string;
  yLabel: string;
  min: number;
  max: number;
  step: number;
}

export interface IProperty {
  name: string;
  data: PropertyData;
}

export interface ICategory {
  category: string;
  properties: IProperty[];
}

export interface IPredictionLogs {
  ph: number;
  potability: boolean;
  temperature: number;
}
export interface IWaterData {
  created_at: string;
  electrical_conductivity: number;
  location: string;
  ph: number;
  prediction_log: IPredictionLogs;
  salinity: number;
  specific_gravity: number;
  temperature: number;
  total_dissolved_solids: number;
}
