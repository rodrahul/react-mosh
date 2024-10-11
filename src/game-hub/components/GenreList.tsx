import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { genres } from "../genreData";

const GenreList = () => {
  // TODO Uncomment this
  // const { data: genres, isLoading, error } = useGenres();

  // TODO remove
  const isLoading = false;
  const error = null;

  if (error)
    return null;
  if (isLoading)
    return <Spinner></Spinner>

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY={1}>
          {/* <Image src={getCroppedImageUrl(genre.image_background)}></Image> */}
          <HStack>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVf99hI1ShatGUgRTlA4QCvTZL6JA-1vHPKg&s"
              boxSize={"32px"}
              borderRadius={8}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
