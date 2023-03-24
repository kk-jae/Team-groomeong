import { IReservation } from "../../../../commons/types/generated/types";
import { getDate } from "../../../commons/libraries/GetDate";
import { isSameDate } from "../../../commons/libraries/GetTimeStamp";
import { v4 as uuidv4 } from "uuid";
import { UseQueryFetchReservationByUser } from "../../../commons/hooks/query/UseQueryFetchReservationByUserId";

interface IReservationHistoryTableProps {
  shopName?: string;
  date?: string;
  time?: string;
  myDog?: string;
}
export const ReservationHistoryTable = (
  props: IReservationHistoryTableProps
) => {
  const { data } = UseQueryFetchReservationByUser();
  const d = new Date();

  return (
    <>
      {data ? (
        data?.fetchReservationsByUser.map((el: IReservation) => (
          <>
            {!isSameDate ? (
              <></>
            ) : (
              <tbody key={el.id}>
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
