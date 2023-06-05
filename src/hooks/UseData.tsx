import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Genre } from "./useGenres";

type FetchData<T> = {
  count: number;
  results: T[];
};

const useData = <T,>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    api
      .get<FetchData<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, deps? [...deps]: []);

  return { data, error, isLoading };
};

export default useData;
