export interface ISearchResponse {
  data: IData[];
  message: string;
}

export interface IData {
  fullname: string;
  mat_no: string;
  department: string;
  faculty: string;
}
