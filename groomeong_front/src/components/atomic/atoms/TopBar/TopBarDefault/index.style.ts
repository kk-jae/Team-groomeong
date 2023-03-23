import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";

export interface ITopBarDefault {
  loggedIn: boolean;
}

export const TopBarBox = styled.div`
  width: 1136px;
  height: 112px;
  margin-bottom: 46px;
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
  width: ${(props: ITopBarDefault) => (props.loggedIn ? "476px" : "352px")};
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
