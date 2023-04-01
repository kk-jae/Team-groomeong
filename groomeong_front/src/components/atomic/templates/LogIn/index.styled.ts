import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

export const LogInWrapper = styled.div`
  width: 1130px;
  height: 947px;
  border-radius: 20px;
  background-color: ${GS.base.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 64px;

  ${mediaQueries("tablet")} {
    padding: 0px 64px;
    padding-bottom: 54px;
    height: 100%;
  }
`;

export const LogInMiddle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  ${GS.Paragraph.Medium}
  padding-bottom:32px;
  border-bottom: 1px solid ${GS.border.borderTransparent};
  margin-bottom: 32px;
`;

export const LogInBottom = styled.div`
  width: 996px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQueries("tablet")} {
    width: 100%;
  }
`;

export const LogInBottomSocial = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 32px;
`;

export const LoginLogo = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;

  :hover {
    transform: scale(1.07);
  }
`;

export const ButtonGoogle = styled.button`
  width: 165px;
  height: 42px;
  border-radius: 12px;
  ${GS.Paragraph.Medium}
  background-color: ${GS.base.secondary};
  border: 1px solid ${GS.border.borderOpaque};
  cursor: pointer;
`;

export const ButtonKakao = styled.button`
  width: 165px;
  height: 42px;
  border-radius: 12px;
  background-color: ${GS.state.warning};
  border: none;
  ${GS.Paragraph.Medium}
  cursor:pointer;
`;

export const LogInBottomSighUp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 269px;
  padding-bottom: 32px;

  ${mediaQueries("phone")} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 32px;
  }
`;
export const LogInBottomSighUpTop = styled.span`
  color: ${GS.contents.contentSecondary};
  ${GS.Paragraph.Medium}
`;

export const LogInBottomSighUpBottom = styled.span`
  color: ${GS.contents.contentPrimary};
  ${GS.Paragraph.Medium}
  text-decoration: underline;
  cursor: pointer;

  :hover {
    font-weight: 600;
  }
`;

export const LogInBottomFindPassword = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 372px;

  ${mediaQueries("phone")} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const LogInBottomFindPasswordTop = styled.span`
  color: ${GS.contents.contentSecondary};
  ${GS.Paragraph.Medium}
`;
export const LogInBottomFindPasswordBottom = styled.span`
  color: ${GS.contents.contentPrimary};
  ${GS.Paragraph.Medium}
  text-decoration: underline;
  cursor: pointer;

  :hover {
    font-weight: 600;
  }
`;
