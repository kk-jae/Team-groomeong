import { Space } from "antd";
import type { DatePickerProps } from "antd";
import * as S from "./index.styled";

interface IProps {
  setReservationDate: any;
  setReservationTime: any;
}

export const ReservationDate = (props: IProps): JSX.Element => {
  const onChange: DatePickerProps["onChange"] = (data, dateString) => {
    props.setReservationDate(dateString);
    props.setReservationTime("");
  };

  return (
    <Space direction="vertical">
      <S.DatePickerStyler onChange={onChange} />
    </Space>
  );
};
