import { IReservation } from "../../../../commons/types/generated/types";
import { UseQueryFetchReservationByUserId } from "../../../commons/hooks/query/UseQueryFetchReservationByUserId";
import { getDate } from "../../../commons/libraries/GetDate";
import { isSameDate } from "../../../commons/libraries/GetTimeStamp";

interface IReservationHistoryTableProps {
  shopName?: string;
  date?: string;
  time?: string;
  myDog?: string;
}
export const ReservationHistoryTable = (
  props: IReservationHistoryTableProps
) => {
  const { data } = UseQueryFetchReservationByUserId();
  const d = new Date();

  return (
    <>
      {data ? (
        data.fetchReservationsByUserId.map((el: IReservation) => (
          <>
            {isSameDate(el.date) ? (
              <></>
            ) : (
              <tbody id={el.id}>
                <tr>
                  <th>{el.shop.name}</th>
                  <th>{getDate(el.date)}</th>
                  <th>{el.time}</th>
                  <th>{el.dog.name}</th>
                </tr>
              </tbody>
            )}
          </>
        ))
      ) : (
        <></>
      )}
    </>
  );
};
