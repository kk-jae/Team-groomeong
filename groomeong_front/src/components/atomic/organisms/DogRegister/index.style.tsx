import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";
import { mediaQueries } from "../../../commons/libraries/MediaQueries";

interface IDivProps {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

export const Label = styled.label`
  ${GS.Label.Medium}
`;

export const Div = styled.div<IDivProps>`
  display: flex;
  padding-left: ${({ left }) => left ?? null};
  padding-right: ${({ right }) => right ?? null};
  padding-top: ${({ top }) => top ?? null};
  padding-bottom: ${({ bottom }) => bottom ?? null};
`;

export const DogRegisterWrapper = styled(Div)`
  display: flex;
  flex-direction: column;
  padding: 32px 64px;
  background-color: ${GS.base.secondary};
  border-radius: 20px;

  ${mediaQueries("tablet")} {
    width: 100%;
    padding: 8px 16px;
  }
`;

export const DogRegisterContentWrapper = styled(Div)`
  display: flex;
  flex-direction: column;
  padding: 32px 64px;
  background-color: ${GS.base.secondary};
  border-radius: 20px;

  ${mediaQueries("phone")} {
    width: 100%;
    padding: 16px 16px;
  }
`;

export const DogRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DogRegisterFooter = styled(Div)`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const DogRegisterFooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .cancel {
    margin-left: 32px;
    ${mediaQueries("phone")} {
      margin-left: 0px;
      margin-top: 16px;
    }
  }

  ${mediaQueries("phone")} {
    flex-direction: column;
    align-items: center;
  }
`;

// export const DogRegisterBadgeButtonWrapper = styled(Div)``;
