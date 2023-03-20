import styled from "@emotion/styled";
import { ButtonCommons } from "../ButtonCommons/index.styles";
import * as GS from "../../../../../theme/global";

export const ButtonStyles = styled(ButtonCommons)`
  display: flex;
  gap: 10px;
  background-color: ${(props) => {
    if (props.border === "border") return GS.base.secondary;
    if (props.border === "none") {
      if (props.state === "disabled") return GS.state.disabled;
      if (props.variation === "primary") {
        return GS.base.primary;
      } else if (props.variation === "tertiary") {
        return GS.base.tertiary;
      } else if (props.variation === "negative") {
        return GS.state.negative;
      }
    }
    return GS.base.primary;
  }};
  color: ${(props) => {
    if (props.state === "disabled") return GS.gray[200];

    if (props.border === "border") {
      if (props.variation === "primary") {
        return GS.base.primary;
      } else if (props.variation === "tertiary") {
        return GS.base.tertiary;
      } else if (props.variation === "negative") {
        return GS.state.negative;
      }
    } else if (props.border === "none") {
      return GS.white;
    }
    return GS.white;
  }};
  border: ${(props) => {
    if (props.border === "none") return "";
    if (props.border === "border") {
      if (props.state === "disabled" && !(props.variation === "tertiary"))
        return `1px solid ${GS.gray[300]}`;
      if (props.variation === "primary") {
        return `1px solid ${GS.base.primary}`;
      } else if (props.variation === "tertiary") {
        return `1px solid ${GS.white}`;
      } else if (props.variation === "negative") {
        return `1px solid ${GS.state.negative}`;
      }
    }
    return `1px solid ${GS.base.primary}`;
  }};
  :hover {
    cursor: ${(props) => (props.state === "disabled" ? "" : "pointer")};
    border: ${(props) => {
      if (props.border === "border") {
        if (props.state === "disabled") return `1px solid ${GS.gray[300]}`;

        if (props.variation === "primary") {
          return `1px solid ${GS.blue[600]}`;
        }
        if (props.variation === "tertiary") {
          return `1px solid ${GS.base.secondary}`;
        }
        if (props.variation === "negative") {
          return `1px solid ${GS.red[600]}`;
        }
      }

      return GS.gray[300];
    }};

    color: ${(props) => {
      if (props.border === "border") {
        if (props.state === "disabled") return "";
        if (props.variation === "primary") {
          return GS.blue[600];
        } else if (props.variation === "tertiary") {
          return GS.gray[700];
        } else if (props.variation === "negative") {
          return GS.red[600];
        }
      } else if (props.border === "none") {
        return "";
      }
    }};
    background-color: ${(props) => {
      if (props.state === "disabled") return "";
      if (props.border === "border") return "";
      if (props.border === "none") {
        if (props.variation === "primary") {
          return GS.blue[600];
        } else if (props.variation === "tertiary") {
          return GS.gray[700];
        } else if (props.variation === "negative") {
          return GS.red[600];
        }
      }
      return GS.blue;
    }};
  }

  :active {
    border: ${(props) => {
      if (props.border === "border") {
        if (props.state === "disabled") {
          if (props.variation !== "tertiary") {
            return `1px solid ${GS.gray[300]}`;
          }
          return "";
        }
        if (props.variation === "primary") {
          return `1px solid ${GS.blue[400]}`;
        } else if (props.variation === "negative") {
          return `1px solid ${GS.red[400]}`;
        }
      } else if (props.border === "none") {
        return "";
      }
      return `1px solid ${GS.base.secondary}`;
    }};
    color: ${(props) => {
      if (props.state === "disabled") return GS.gray[200];

      if (props.border === "border") {
        if (props.variation === "primary") {
          return GS.blue[400];
        } else if (props.variation === "tertiary") {
          return GS.gray[500];
        } else if (props.variation === "negative") {
          return GS.red[400];
        }
      }
      return "";
    }};
    background: ${(props) => {
      if (props.state === "disabled") return "";
      if (props.border === "none") {
        if (props.variation === "primary") {
          return GS.blue[400];
        } else if (props.variation === "tertiary") {
          return GS.gray[500];
        } else if (props.variation === "negative") {
          return GS.red[400];
        }
        return GS.blue[400];
      }
    }};
  }
`;
