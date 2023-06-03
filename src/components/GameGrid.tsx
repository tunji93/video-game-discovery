import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import useGames from "../hooks/useGames";
import api from "../services/api";



function GameGrid() {
  const {error, games} = useGames()
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
