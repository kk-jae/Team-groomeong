import { DatePicker, Space } from "antd";
import type { DatePickerProps } from "antd";

interface IProps {
  setReservationDate: any;
}

export const ReservationDate = (props: IProps) => {
  const onChange: DatePickerProps["onChange"] = (data, dateString) => {
    props.setReservationDate(dateString);
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
