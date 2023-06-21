import { Box, Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import GameCardSkeleton from "./components/GameCardSkeleton";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

export type GamesQuery = {
  genreId?: number;
  platformId?: number;
  order: string;
  searchText: string;
};

function App() {
  const [gamesQuery, setGamesQuery] = useState<GamesQuery>({} as GamesQuery);
  const handleSelectSearchText = (searchText: string) => {
    setGamesQuery({ ...gamesQuery, searchText });
  };
  const handleSelectOrder = (order: string) => {
    setGamesQuery({ ...gamesQuery, order });
  };

  const handleSelectGenre = (genreId: number) => {
    setGamesQuery({ ...gamesQuery, genreId });
  };
  const handleSelectPlatform = (platformId: number) => {
    setGamesQuery({ ...gamesQuery, platformId });
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
        <NavBar onSearch={handleSelectSearchText} />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea={"aside"} paddingX={5}>
          <GenreList
            onSelectGenre={handleSelectGenre}
            selectedGenreId={gamesQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem gridArea={"main"}>
        <Box paddingLeft={2}>
          <GameHeading gamesQuery={gamesQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatformId={gamesQuery?.platformId}
              onSelectPlatform={handleSelectPlatform}
            />
            <SortSelector
              onSelectSortOrder={handleSelectOrder}
              selectedOrderValue={gamesQuery?.order}
            />
          </HStack>
        </Box>

        <GameGrid gamesQuery={gamesQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
