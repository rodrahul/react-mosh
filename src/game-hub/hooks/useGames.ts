import { GameQuery } from "../GameHubApp";
import useData from "./useData";
import { Platform } from "./usePlatform";
import { games } from "../data/gamesData";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

// TODO Uncomment this
// const useGames = (gameQuery: GameQuery) => useData<Game>
//   ("/games",
//     {
//       params:
//       {
//         genres: gameQuery.genre?.id,
//         parent_platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText
//       }
//     }, [gameQuery])
const useGames = (gameQuery: GameQuery) => ({ data: games, isLoading: false, error: null });

export default useGames;