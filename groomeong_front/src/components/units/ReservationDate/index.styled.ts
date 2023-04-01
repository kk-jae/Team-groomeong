import styled from "@emotion/styled";
import { DatePicker } from "antd";
import { mediaQueries } from "../../commons/libraries/MediaQueries";

export const DatePickerStyler = styled(DatePicker)`
  width: 428px;
  height: 43px;

  ${mediaQueries("phone")} {
    width: 100%;
  }
`;
