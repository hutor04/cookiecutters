export interface IPersonState {
  masterData?: IPerson;
  data?: IPerson;
  loadStatus: RequestStatus;
  loadError?: any;
}

export interface IPerson {
  id: number;
  firstName: string;
  lastName: string;
}

export interface IPersonApi {
  id: number;
  firstName: string;
  lastName: string;
}

export enum RequestStatus {
  UNLOADED = "unloaded",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
  FORBIDDEN = "forbidden"
}