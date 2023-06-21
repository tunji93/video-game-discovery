import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
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
  useInfiniteQuery<FetchData<Game>, Error>({
    queryKey: ["games", gamesQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gamesQuery?.genreId,
          parent_platforms: gamesQuery?.platformId,
          ordering: gamesQuery?.order,
          search: gamesQuery?.searchText,
          page: pageParam,
        },
      }),

    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGames;
