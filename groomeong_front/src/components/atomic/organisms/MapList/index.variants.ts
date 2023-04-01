import { Variants } from "framer-motion";

export const MapListBodyWrapperVariants: Variants = {
  open: {
    x: 0,
    opacity: 1,
  },
  closed: {
    x: "-100%",
    opacity: 1,
  },
};

export const MapListContentsWrapperVariants: Variants = {
  initial: {
    backgroundColor: "#efefef",
  },
};
