import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api";
import { Game } from "./useGames";

const apiClient = new ApiClient<Game>("/games");

const useGameDetails = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGameDetails;
