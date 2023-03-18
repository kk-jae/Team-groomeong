import styled from "@emotion/styled";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import { ICommonsImagesProps } from ".";
import * as GS from "../../../theme/global";

export const AddImagesBoxStyles = styled.div<ICommonsImagesProps>`
  width: 84px;
  height: 84px;
  padding: ${`${GS.Spacing[12]}px`}${`${GS.Spacing[8]}px`};
  background: ${(props) => {
    if (props.state === "disabled") return GS.state.disabled;
    if (props.variation === "primary") {
      return GS.base.primary;
    } else if (props.variation === "secondary") {
      return GS.black;
    }
    return GS.base.primary;
  }};
  &:hover {
    cursor: ${(props) => (props.state === "disabled" ? "" : "pointer")};

    background: ${(props) => {
      if (props.state === "disabled") return "";
      if (props.variation === "primary") {
        return GS.blue[600];
      } else if (props.variation === "secondary") {
        return GS.gray[700];
      }
      return GS.blue[600];
    }};
  }
  &:active {
    background: ${(props) => {
      if (props.state === "disabled") return "";
      if (props.variation === "primary") {
        return GS.blue[400];
      } else if (props.variation === "secondary") {
        return GS.gray[500];
      }
      return GS.blue[400];
    }};
  }
`;
export const AddImagesStyles = styled(ImageSearchIcon)`
  width: 84px;
  height: 84px;
  color: ${GS.base.secondary};
`;
