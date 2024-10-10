import useData from "./useData";


export interface Genre {
  id: number;
  name: string;
  game_count: number;
}

const useGenres = () => useData<Genre>("/genres")

export default useGenres;