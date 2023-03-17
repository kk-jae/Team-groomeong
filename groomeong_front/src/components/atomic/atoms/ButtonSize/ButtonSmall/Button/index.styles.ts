import styled from "@emotion/styled";
import * as GS from "../../../../../../../theme/global";
import { ButtonCommons } from "../../../ButtonCommons/index.styles";

export const ButtonDefaultStyle = styled(ButtonCommons)`
  background: ${(props) => {
    if (props.state === "disabled") return GS.state.disabled;
    return props.variation === "primary"
      ? GS.base.primary
      : props.variation === "tertiary"
      ? GS.base.tertiary
      : props.variation === "negative"
      ? GS.state.negative
      : GS.base.primary;
  }};

  color: ${(props) => (props.state === "disabled" ? GS.gray[200] : GS.white)};
  :hover {
    cursor: ${(props) => (props.state === "disabled" ? "" : "pointer")};

    background-color: ${(props) => {
      if (props.state === "disabled") return "";
      if (props.variation === "primary") {
        return GS.blue[600];
      } else if (props.variation === "tertiary") {
        return GS.gray[700];
      } else if (props.variation === "negative") {
        return GS.red[600];
      }

      return GS.blue;
    }};
  }
  :active {
    background-color: ${(props) => {
      if (props.state === "disabled") return "";

      if (props.variation === "primary") {
        return GS.blue[400];
      } else if (props.variation === "tertiary") {
        return GS.gray[500];
      } else if (props.variation === "negative") {
        return GS.red[400];
      }

      return GS.blue[400];
    }};
  }
`;
