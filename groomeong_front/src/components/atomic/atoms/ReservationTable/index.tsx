import { Buttons } from "../Buttons";

interface IReservationTableProps {
  shopName?: string;
  date?: string;
  time?: string;
  myDog?: string;
}
export const ReservationTable = (props: IReservationTableProps) => {
  return (
    <tbody>
      <tr>
        <th>{props.shopName}</th>
        <th>{props.date}</th>
        <th>{props.time}</th>
        <th>{props.myDog}</th>
        <th>
          <div>
            <Buttons
              variation="primary"
              label="예약 취소"
              border="none"
              size="small"
              type="button"
            ></Buttons>
          </div>
        </th>
      </tr>
    </tbody>
  );
};
