import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatform";
import PlatformSelector from "./components/PlatformSelector";
import { platforms } from "./platformsData";

const GameHubApp = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );

  const onSelectPlatform = (platform: Platform) => {
    setSelectedPlatform(platform);
  };

  const onSelectGenre = (genre: Genre) => {
    setSelectedGenre(genre);
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
          <NavBar></NavBar>
        </GridItem>
        {/* Aside panel is only rendred on large devices */}
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenre={selectedGenre}
              onSelectGenre={onSelectGenre}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={onSelectPlatform}
          ></PlatformSelector>
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Grid>
    </div>
  );
};

export default GameHubApp;
