import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { genres } from "../genreData";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  // TODO Uncomment this
  // const { data: genres, isLoading, error } = useGenres();

  // TODO remove
  const isLoading = false;
  const error = null;

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading marginBottom={3} fontSize="2xl">
        Genre
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            {/* <Image src={getCroppedImageUrl(genre.image_background)}></Image> */}
            <HStack>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVf99hI1ShatGUgRTlA4QCvTZL6JA-1vHPKg&s"
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
              ></Image>
              <Button
                variant={"link"}
                fontSize="lg"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
