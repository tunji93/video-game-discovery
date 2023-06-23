import axios, { AxiosRequestConfig } from "axios";

export type FetchData<T> = {
  count: number;
  results: T[];
  next: string | null;
};

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3185f6f97b424667b7161250fec04983",
  },
});

export default class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (axiosConfig?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchData<T>>(this.endpoint, axiosConfig)
      .then((res) => res.data);
  };

  get = (id: string | number) => {
    return axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}
