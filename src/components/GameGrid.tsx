import { SimpleGrid } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import useGames from "../hooks/useGames";
import api from "../services/api";
import GameCard from "./GameCard";

function GameGrid() {
  const { error, games } = useGames();
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
