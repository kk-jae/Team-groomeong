import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

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
`;

export const DogRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DogRegisterBadgeButtonWrapper = styled(Div)``;
