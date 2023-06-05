import { SimpleGrid, Skeleton } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import api from "../services/api";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

type Props = {
  selectedGenre: Genre | null;
};

function GameGrid({ selectedGenre }: Props) {
  const { error, data: games, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
