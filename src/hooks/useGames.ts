import { GamesQuery } from "../App";
import useData from "./UseData";
import { Genre } from "./useGenres";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};
export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};

const useGames = (gamesQuery: GamesQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gamesQuery?.genre?.id,
        platforms: gamesQuery?.platform?.id,
      },
    },
    [gamesQuery]
  );

export default useGames;
