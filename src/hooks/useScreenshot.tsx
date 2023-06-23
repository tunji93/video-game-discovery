import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api";
type Screenshot = {
  id: number;
  image: string;
  width: number;
  height: number;
};

const useScreenshot = (gameId: number) => {
  const apiClient = new ApiClient<Screenshot>(`games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshot", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshot;
