interface IReservationHistoryTableProps {
  shopName?: string;
  date?: string;
  time?: string;
  myDog?: string;
}
export const ReservationHistoryTable = (
  props: IReservationHistoryTableProps
) => {
  return (
    <tbody>
      <tr>
        <th>{props.shopName}</th>
        <th>{props.date}</th>
        <th>{props.time}</th>
        <th>{props.myDog}</th>
      </tr>
    </tbody>
  );
};
