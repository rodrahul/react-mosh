import { useEffect, useState } from "react";
import apiClients from "../services/api-clients";
import { Text } from "@mantine/core";

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
interface Game {
  id: number;
  name: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    apiClients
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
