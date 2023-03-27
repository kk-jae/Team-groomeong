import { DatePicker, Space } from "antd";
import type { DatePickerProps } from "antd";

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
      <DatePicker
        onChange={onChange}
        style={{
          width: "428px",
          height: "43px",
          borderRadius: "12px",
          paddingLeft: "25px",
        }}
      />
    </Space>
  );
};
