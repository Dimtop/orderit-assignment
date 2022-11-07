export interface IDataset {
  label: string;
  data: any[];
  backgroundColor: string[] | string;
  borderColor?: string;
  borderWidth: number;
  circumference?: number;
}

export interface IChartData {
  labels: string[];
  datasets: IDataset[];
}
