import styled from "@emotion/styled";
import * as GS from "../../../../../../theme/global";

interface IPropsBig {
  big: boolean;
}
interface IPropsMiddle {
  middle: boolean;
}
interface IPropsSmall {
  small: boolean;
}
interface IPropsSpecial {
  special: boolean;
}

export const SizeBadgeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CheckBoxBig = styled.span<IPropsBig>`
  height: 33px;
  margin: 2px;
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${(props) => (props.big ? GS.base.primary : GS.gray[300])};
  color: white;
  ${GS.Heading.Medium};
  cursor: pointer;
`;
export const CheckBoxMiddle = styled.span<IPropsMiddle>`
  height: 33px;
  margin: 2px;
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.middle ? GS.base.primary : GS.gray[300]};

  color: white;
  ${GS.Heading.Medium};
  cursor: pointer;
`;
export const CheckBoxSmall = styled.span<IPropsSmall>`
  height: 33px;
  margin: 2px;
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.small ? GS.base.primary : GS.gray[300]};

  color: white;
  ${GS.Heading.Medium};
  cursor: pointer;
`;
export const CheckBoxSpecial = styled.span<IPropsSpecial>`
  height: 33px;
  margin: 2px;
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.special ? GS.base.primary : GS.gray[300]};
  color: white;
  ${GS.Heading.Medium};
  cursor: pointer;
`;
