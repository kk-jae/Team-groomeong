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
          width: "444px",
          height: "81px",
          borderRadius: "12px",
          paddingLeft: "25px",
        }}
      />
    </Space>
  );
};
