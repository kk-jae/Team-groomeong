import styled from "@emotion/styled";
import * as GS from "../../../../../../../theme/global";
import { ButtonCommons } from "../../../ButtonCommons/index.styles";

export const ButtonBorderStyles = styled(ButtonCommons)`
  background-color: ${(props) =>
    props.border === "border" ? GS.white : GS.white};

  color: ${(props) => {
    if (
      props.state === "disabled" &&
      props.border === "border" &&
      !(props.variation === "tertiary")
    )
      return GS.gray[200];
    if (props.border === "border" && props.variation === "primary") {
      props.variation === "primary";
      return GS.base.primary;
    } else if (props.border === "border" && props.variation === "tertiary") {
      return GS.base.tertiary;
    } else if (props.border === "border" && props.variation === "negative") {
      return GS.state.negative;
    }
    return GS.base.primary;
  }};

  border: ${(props) => {
    if (
      props.state === "disabled" &&
      props.border === "border" &&
      !(props.variation === "tertiary")
    )
      return `1px solid ${GS.gray[300]}`;

    if (props.variation === "primary" && props.border === "border") {
      return `1px solid ${GS.base.primary}`;
    } else if (props.variation === "tertiary" && props.border === "border") {
      return `1px solid ${GS.white}`;
    } else if (props.variation === "negative" && props.border === "border") {
      return `1px solid ${GS.state.negative}`;
    }

    return `1px solid ${GS.base.primary}`;
  }};

  :hover {
    cursor: ${(props) => (props.state === "disabled" ? "" : "pointer")};

    border: ${(props) => {
      if (props.state === "disabled") return "";

      if (props.variation === "primary" && props.border === "border") {
        return `1px solid ${GS.blue[600]}`;
      }

      if (props.variation === "negative" && props.border === "border") {
        return `1px solid ${GS.red[600]}`;
      }
      return "";
    }};

    color: ${(props) => {
      if (props.state === "disabled") return "";
      if (props.variation === "primary" && props.border === "border") {
        return GS.blue[600];
      } else if (props.variation === "tertiary" && props.border === "border") {
        return GS.gray[700];
      } else if (props.variation === "negative" && props.border === "border") {
        return GS.red[600];
      }

      return GS.blue[600];
    }};
  }
  :active {
    border: ${(props) => {
      if (props.state === "disabled") return "";

      if (props.border === "border" && props.variation === "primary") {
        return `1px solid ${GS.blue[400]}`;
      } else if (props.border === "border" && props.variation === "negative") {
        return `1px solid ${GS.red[400]}`;
      }
      return `1px solid ${GS.white}`;
    }};
    color: ${(props) => {
      if (props.state === "disabled") return "";

      if (props.border === "border" && props.variation === "primary") {
        return GS.blue[400];
      } else if (props.border === "border" && props.variation === "tertiary") {
        return GS.gray[500];
      } else if (props.border === "border" && props.variation === "negative") {
        return GS.red[400];
      }
      return GS.blue[400];
    }};
  }
`;
