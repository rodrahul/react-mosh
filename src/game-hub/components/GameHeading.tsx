import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../GameHubApp";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  // Games: this is default
  // Action Games: if genre is selected from side nav
  // XBox Games: if platform is selected
  // XBox Action Games: if platform is selected as well

  const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
