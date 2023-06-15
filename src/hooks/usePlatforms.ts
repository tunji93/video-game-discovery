import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api";
import api, { FetchData } from "../services/api";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 60 * 60 * 24 * 1000, //24hrs
  });

export default usePlatforms;
