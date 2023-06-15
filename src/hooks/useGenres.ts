import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api";
import api, { FetchData } from "../services/api";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn:  apiClient.getAll
  });

export default useGenres;
