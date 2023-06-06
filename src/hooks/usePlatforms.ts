import useData from "./UseData";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
