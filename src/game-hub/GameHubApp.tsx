import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatform";
import PlatformSelector from "./components/PlatformSelector";
import { platforms } from "./data/platformsData";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const GameHubApp = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const onSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };

  const onSelectSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  const onSearch = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText });
  };

  return (
    <div>
      {/* Grid with two rows
          row1: nav nav
          row2: aside main 
          `"nav nav" "aside main"`
      */}
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={onSearch}></NavBar>
        </GridItem>
        {/* Aside panel is only rendred on large devices */}
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={onSelectGenre}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={3}>
            <GameHeading gameQuery={gameQuery}></GameHeading>
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={onSelectPlatform}
              ></PlatformSelector>
              <SortSelector
                selectedSort={gameQuery.sortOrder}
                onSelectSortOrder={onSelectSortOrder}
              ></SortSelector>
            </HStack>
          </Box>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default GameHubApp;
