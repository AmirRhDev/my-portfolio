export type FeaturesStore = {
  inViewFeature: string | null;
  setInViewFeature: (feature: string | null) => void;
  fullscreenFeature: string | null;
  setFullscreenFeature: (feature: string | null) => void;
  lastFullscreenFeature: string | null;
  setLastFullscreenFeature: (feature: string | null) => void;
};