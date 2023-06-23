import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api";
type Trailer = {
  id: number;
  name: string;
  data: { 480: string; max: string };
  preview: string;
};

const useTrailer = (gameId: number) => {
  const apiClient = new ApiClient<Trailer>(`games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
