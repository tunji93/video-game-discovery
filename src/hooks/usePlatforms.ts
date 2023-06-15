import { useQuery } from "@tanstack/react-query";
import api, { FetchData } from "../services/api";


export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      api
        .get<FetchData<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 60 * 60 * 24 * 1000 //24hrs    
  });

export default usePlatforms;
