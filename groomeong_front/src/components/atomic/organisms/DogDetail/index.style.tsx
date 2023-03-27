import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

interface IDivProps {
  crossAxis?: boolean;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}
interface DogDetailContentImgProps {
  url?: string;
}

export const Div = styled.div<IDivProps>`
  display: "flex";
  flex-direction: ${({ crossAxis }) => (crossAxis ? "column" : "row")};
  padding-left: ${({ left }) => left ?? null};
  padding-right: ${({ right }) => right ?? null};
  padding-top: ${({ top }) => top ?? null};
  padding-bottom: ${({ bottom }) => bottom ?? null};
`;

export const DogDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${GS.base.secondary};
  border-radius: 20px;
  padding: 32px 64px;
`;
export const DogDetailContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 32px 128px;
`;

export const DogDetailImgLabel = styled.div`
  ${GS.Label.Medium};
  color: ${GS.border.borderPrimary};
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 28px;
  }
`;

export const DogDetailContentImg = styled.div<DogDetailContentImgProps>`
  width: 388px;
  height: 388px;
  padding: 32px;
  background-image: url(${({ url }) => url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const DogDetailFooter = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin: 32px;
`;
