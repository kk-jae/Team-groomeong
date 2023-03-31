import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

interface IPageHeaderIcon {
  icon: string;
}

export const PageHeaderWrapper = styled.div`
  width: 1124px;
  padding: 32px 64px;

  ${mediaQueries("tablet")} {
    width: 100%;
    padding: 32px 0px 4px 0px;
  }

  ${mediaQueries("phone")} {
    width: 100%;
    padding: 32px 0px 4px 0px;
  }
`;

export const PageHeaderContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageHeaderIcon = styled.div<IPageHeaderIcon>`
  background-image: url(${({ icon }) => icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 48px;
  height: 48px;
  margin-right: 32px;
  margin-bottom: 8px;
`;

export const PageHeaderTitle = styled.h1`
  ${GS.Heading.XXXL}
  color: ${GS.contents.contentPrimary};
  margin-bottom: 8px;

  ${mediaQueries("tablet")} {
    ${GS.Heading.XXL}
    margin-bottom: 8px;
  }

  ${mediaQueries("phone")} {
    ${GS.Heading.XXL}
    margin-bottom: 8px;
  }
`;

export const PageHeaderDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${GS.contents.contentSecondary};
`;
