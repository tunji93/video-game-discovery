import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector, { SortOrder } from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

export type GamesQuery = {
  genre: Genre | null;
  platform: Platform | null;
  order: SortOrder | null;
};

function App() {
  const [gamesQuery, setGamesQuery] = useState<GamesQuery>({} as GamesQuery);

  const handleSelectOrder = (order: SortOrder| null) => {
    setGamesQuery({ ...gamesQuery, order });
  };

  const handleSelectGenre = (genre: Genre | null) => {
    setGamesQuery({ ...gamesQuery, genre });
  };
  const handleSelectPlatform = (platform: Platform | null) => {
    setGamesQuery({ ...gamesQuery, platform });
  };
  return (
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
      <GridItem gridArea={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea={"aside"} paddingX={5}>
          <GenreList
            onSelectGenre={handleSelectGenre}
            selectedGenre={gamesQuery?.genre}
          />
        </GridItem>
      </Show>
      <GridItem gridArea={"main"}>
        <HStack spacing={5} marginBottom={5} paddingLeft={2}>
          <PlatformSelector
            selectedPlatform={gamesQuery.platform}
            onSelectPlatform={handleSelectPlatform}
          />
          <SortSelector onSelectSortOrder={handleSelectOrder} selectedOrder={gamesQuery.order} />
        </HStack>

        <GameGrid gamesQuery={gamesQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
