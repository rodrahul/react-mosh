import { genres } from "../genreData";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  // TODO Uncomment this
  // const { genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
