import { create } from "zustand";
import { FeaturesStore } from "./types";

const useFeatureStore = create<FeaturesStore>((set) => ({
  inViewFeature: null,
  setInViewFeature: (feature: string | null) => set({ inViewFeature: feature }),
  fullscreenFeature: null,
  setFullscreenFeature: (feature: string | null) => {
    set({ fullscreenFeature: feature });
    if (feature !== null) {
      set({ lastFullscreenFeature: feature });
    }
  },
  lastFullscreenFeature: null,
  setLastFullscreenFeature: (feature: string | null) =>
    set({ lastFullscreenFeature: feature }),
}));

export default useFeatureStore;