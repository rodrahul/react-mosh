import useData from "./useData";
import { genres } from "../data/genreData";

export interface Genre {
  id: number;
  name: string;
  game_count: number;
  image_background: string;
}

// TODO uncomment
// const useGenres = () => useData<Genre>("/genres")
const useGenres = () => ({ data: genres, isLoading: false, error: null })

export default useGenres;