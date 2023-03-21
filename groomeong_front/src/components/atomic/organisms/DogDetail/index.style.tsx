import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

interface IDivProps {
  crossAxis?: boolean;
}
interface DogDetailContentImgProps {
  url?: string;
}

export const Div = styled.div<IDivProps>`
  display: flex;
  flex-direction: ${({ crossAxis }) => (crossAxis ? "column" : "row")};
`;

export const DogDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${GS.base.secondary};
  border-radius: 20px;
`;
export const DogDetailContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 32px 128px;
`;
export const DogDetailContentImg = styled.div<DogDetailContentImgProps>`
  width: 388px;
  height: 388px;
  padding: 32px;
  background-image: url(${({ url }) => url ?? "/image/img-dog-detail.png"});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
