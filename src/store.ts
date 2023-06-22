import { create } from "zustand";

type GamesQuery = {
  genreId?: number;
  platformId?: number;
  order?: string;
  searchText?: string;
};

type GamesQueryStore = {
  gameQuery: GamesQuery;
  setSearchText: (searchText: string) => void;
  setPlatformId: (platformId: number) => void;
  setGenreId: (genreId: number) => void;
  setSortOrder: (sortOrder: string) => void;
};

const useGameQueryStore = create<GamesQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore


