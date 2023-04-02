import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

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
  flex-direction: ${({ crossAxis }) => (crossAxis === true ? "column" : "row")};
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

  ${mediaQueries("tablet")} {
    width: 100%;
    padding: 12px 16px;
  }
`;
export const DogDetailContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 32px 128px;

  ${mediaQueries("tablet")} {
    width: 100%;
    padding: 16px 64px;
  }

  ${mediaQueries("phone")} {
    padding: 16px 16px;
  }
`;

export const DogDetailImgLabel = styled.div`
  ${GS.Label.Medium};
  color: ${GS.border.borderPrimary};
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 28px;
  }

  ${mediaQueries("phone")} {
    ${GS.Label.Small};
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

  ${mediaQueries("tablet")} {
    width: 280px;
    height: 280px;
  }

  ${mediaQueries("phone")} {
    width: 160px;
    height: 160px;
  }
`;

export const DogDetailFooter = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin: 32px;

  .deleteButton {
    margin-left: 32px;

    ${mediaQueries("phone")} {
      margin-left: 0px;
      margin-top: 16px;
    }
  }

  ${mediaQueries("phone")} {
    flex-direction: column;
    align-items: center;
    margin: 0px 0px 16px 0px;
  }
`;

export const DogDetailSpecifics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${GS.Paragraph.Medium}
  color: ${GS.gray[400]};
`;

export const SpecificsTitle = styled.div`
  text-align: center;
  width: 80%;
  padding-bottom: 20px;
  border-bottom: 1px solid ${GS.border.borderOpaque};
`;
export const SpecificsBox = styled.div`
  width: 80%;
  height: 150px;
  background-color: #f2f2f2;
  margin-top: 8px;
  padding: 32px;
  color: #5c5c5c;
  margin-bottom: 20px;
`;
