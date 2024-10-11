import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import apiClients, { CanceledError } from "../services/api-clients";

interface FetchResponse<T> {
  count: number;
  results: T[];
}


const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true)

    apiClients.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError(err.message);
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort(); // Cancel the request when component unmounts
  }, deps ? [...deps] : []);


  return { data, error, isLoading };

}

export default useData;