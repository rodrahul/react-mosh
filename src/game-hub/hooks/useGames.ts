import { useEffect, useState } from "react";
import apiClients, { CanceledError } from "../services/api-clients";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[],
  metacritic: number
}

const useGames = () => {

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true)
    apiClients
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setIsLoading(false);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      })

    return () => controller.abort(); // Cancel the request when component unmounts
  }, []);


  return { games, error, isLoading };
}


export default useGames;