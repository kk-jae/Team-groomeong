import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

interface IPageHeaderContentsWrapper {}

interface IPageHeaderIcon {
  icon: string;
}

export const PageHeaderWrapper = styled.div`
  width: 1124px;
  padding: 32px 64px;
`;

export const PageHeaderContentsWrapper = styled.div<IPageHeaderContentsWrapper>`
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
`;

export const PageHeaderTitle = styled.h1`
  ${GS.Heading.XXXL}
  color: ${GS.contents.contentPrimary};
  margin-left: 32px;
  margin-bottom: 8px;
`;

export const PageHeaderDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${GS.contents.contentSecondary};
`;
