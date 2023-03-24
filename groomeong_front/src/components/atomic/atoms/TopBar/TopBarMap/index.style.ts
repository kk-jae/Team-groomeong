import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";

export interface ITopBarMapProps {
  loggedIn: boolean;
}

export const TopBarBox = styled.div`
  width: calc(100vw - 680px);
  height: 112px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
