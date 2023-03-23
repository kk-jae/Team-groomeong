import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

export const LogInWrapper = styled.div`
  width: 1130px;
  height: 947px;
  border-radius: 20px;
  background-color: ${GS.base.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogInTop = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${GS.Heading.XXXL}
  padding:104px 0px 8px 0px;
  border-bottom: 1px solid ${GS.border.borderOpaque};
  margin-bottom: 32px;
`;
export const LogInTopText = styled.span``;

export const LogInMiddle = styled.form`
  width: 996px;
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
`;

export const LogInBottomSocial = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 32px;
`;

export const LoginLogo = styled.img`
  width: 50px;
  height: 50px;
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
