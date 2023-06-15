import { useQuery } from "@tanstack/react-query";
import api, { FetchData } from "../services/api";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => api.get<FetchData<Genre>>("/genres").then((res) => res.data),
  });

export default useGenres;
