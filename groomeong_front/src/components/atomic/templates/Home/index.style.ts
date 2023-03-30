import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import { motion } from "framer-motion";
import { SearchBox } from "../../atoms/SearchBar/index.styles";

export const MainText = styled(motion.h1)`
  @media screen and (max-width: 1024px) {
    ${GS.Heading.XL}
  }
`;

export const MainCharacter = styled(motion.img)`
  @media screen and (max-width: 1024px) {
    width: 30rem;
    height: 30rem;
  }
`;

export const Search = styled(SearchBox)`
  @media screen and (max-width: 1024px) {
    width: 30rem;
    height: 30rem;
  }
`;
