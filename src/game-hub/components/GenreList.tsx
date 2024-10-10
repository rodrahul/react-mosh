import { genres } from "../genreData";
import useGenres, { Genre } from "../hooks/useGenres";

const GenreList = () => {
  // TODO Uncomment this
  // const { data: genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
