import { useEffect, useState } from "react";
import apiClients, { CanceledError } from "../services/api-clients";

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}


export interface Genre {
  id: number;
  name: string;
  game_count: number;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true)

    apiClients.get<FetchGenresResponse>("/genres")
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError(err.message);
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort(); // Cancel the request when component unmounts
  }, []);


  return { genres, error, isLoading };

}

export default useGenres;