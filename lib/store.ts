import { create } from "zustand";

interface FilterState {
  region: string;
  riskCategory: string;
  query: string;
  setRegion: (region: string) => void;
  setRiskCategory: (category: string) => void;
  setQuery: (query: string) => void;
}

export const useFilters = create<FilterState>((set) => ({
  region: "All",
  riskCategory: "All",
  query: "",
  setRegion: (region) => set({ region }),
  setRiskCategory: (riskCategory) => set({ riskCategory }),
  setQuery: (query) => set({ query })
}));
