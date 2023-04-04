import { Variants } from "framer-motion";

export const InfoWindowVariants: Variants = {
  initial: {
    y: 0,
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    y: "-160%",
    x: "-54%",
    opacity: 1,
    scale: 1,
  },
};
