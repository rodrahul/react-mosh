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
  parent_platforms: { platform: Platform }[]
}

const useGames = () => {

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();

    apiClients
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;

        setError(error.message);
      });

    return () => controller.abort(); // Cancel the request when component unmounts
  }, []);


  return { games, error };
}


export default useGames;