import { useQuery } from "@tanstack/react-query";
import { GamesQuery } from "../App";
import ApiClient from "../services/api";
import api, { FetchData } from "../services/api";
import { Platform } from "./usePlatforms";

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  top_rating: number;
};
const apiClient = new ApiClient<Game>("/games");
const useGames = (gamesQuery: GamesQuery) =>
  useQuery<FetchData<Game>, Error>({
    queryKey: ["games", gamesQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gamesQuery?.genre?.id,
          parent_platforms: gamesQuery?.platform?.id,
          ordering: gamesQuery?.order?.value,
          search: gamesQuery?.searchText,
        },
      }),
  });

export default useGames;
