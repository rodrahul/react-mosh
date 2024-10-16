import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        {/* TODO revert back */}
        {/* <Image src={getCroppedImageUrl(game.background_image)}></Image> */}
        <Image src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_original/casablanca-gaming-youtube-thumbnail-template-dh62a1c21a4080.webp"></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={3}>
            {/* Show game console icons */}
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>

            {/* Show critic score */}
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>

          <Heading fontSize={"2xl"}>
            {game.name}
            <Emoji rating={game.rating_top}></Emoji>
          </Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
