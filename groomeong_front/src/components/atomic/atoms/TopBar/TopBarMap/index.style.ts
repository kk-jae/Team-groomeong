import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";
import MenuIcon from "@mui/icons-material/Menu";
import { mediaQueries } from "../../../../commons/libraries/MediaQueries";

export interface ITopBarMapProps {
  loggedIn: boolean;
}

export const TopBarBox = styled.div`
  width: calc(100vw - 544px);
  height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0px;
  right: 64px;

  ${mediaQueries("tablet")} {
    transition: identifier;
    width: 100%;
    animation-name: identifier;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    height: 72px;
    top: 0px;
    right: 0px;
    padding: 16px;
  }

  @keyframes identifier {
    0% {
      width: 65%;
    }
    100% {
      width: 100%;
    }
  }
`;

export const TopBarLogo = styled.div`
  width: 228px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const TopBarButtons = styled.div`
  width: ${(props: ITopBarMapProps) => (props.loggedIn ? "334px" : "210px")};
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries("phone")} {
    display: none;
  }
`;

export const HamBurger = styled(MenuIcon)`
  display: none;

  ${mediaQueries("phone")} {
    display: block;
    width: 44px;
    height: 44px;
    cursor: pointer;
    animation: buttonsOpa 1s ease-in-out 1 alternate;
  }

  @keyframes buttonsOpa {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MenuBox = styled.div`
  display: none;

  ${mediaQueries("tablet")} {
    display: flex;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.867);
    position: absolute;
    right: 0px;
    top: 112px;
    display: flex;
    flex-direction: column;
  }
`;

export const MenuButton = styled.button`
  ${mediaQueries("tablet")} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    ${GS.Label.Large}
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    color: ${GS.white};
    width: 100%;
    height: 88px;
    cursor: pointer;
  }
`;

export const TopBarProfile = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${GS.border.borderTransparent};
  border-radius: 50px;
  background-color: ${GS.white};
  img {
    width: 48px;
    height: 48px;
    border-radius: 50px;
  }
`;
