import styled from "@emotion/styled";
import { Select } from "antd";
import * as GS from "../../../../theme/global";
import { mediaQueries } from "../../commons/libraries/MediaQueries";

interface IProps {
  choiceDog: string;
}

export const SelectStyle = styled(Select)`
  width: 444px;
  display: flex;
  flex-direction: column;

  ${mediaQueries("phone")} {
    width: 100%;
  }
`;

export const SelectContainer = styled.div`
  width: 444px;
  display: flex;
  flex-direction: column;

  ${mediaQueries("tablet")} {
    width: 100%;
  }
`;

export const SelectWrapper = styled.div`
  width: 444px;
  height: 74px;
  border: 1px solid ${GS.border.borderTransparent};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  ${mediaQueries("tablet")} {
    width: 100%;
  }
`;

export const SelectTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 25px 0px 25px;
`;
export const SelectTitleMessage = styled.span<IProps>`
  color: ${(props) =>
    props.choiceDog !== "댕댕이를 선택해주세요" ? "black" : `${GS.gray[500]}`};
  ${GS.Paragraph.Medium}
`;

export const SelectTitleIcon = styled.span`
  cursor: pointer;
`;

export const SelectItemWrapper = styled.div`
  border: 1px solid ${GS.border.borderTransparent};
  border-top: none;
`;

export const SelectItem = styled.span`
  ${GS.Paragraph.Medium}
  width: 100%;
  height: 74px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 25px;

  :hover {
    background-color: ${GS.base.primary};
  }
`;
