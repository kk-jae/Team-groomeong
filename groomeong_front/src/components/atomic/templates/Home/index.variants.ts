import { Variants } from "framer-motion";
export const MainPropupBoxWrapperVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 100
  }
};
