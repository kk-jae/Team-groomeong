import { UseQueryFetchReservationByUserId } from "../../../commons/hooks/query/UseQueryFetchReservationByUserId";
import { getDate } from "../../../commons/libraries/GetDate";
import { Buttons } from "../Buttons";
import { IReservation } from "../../../../commons/types/generated/types";
import { isSameDate } from "../../../commons/libraries/GetTimeStamp";

export const ReservationTable = () => {
  const { data } = UseQueryFetchReservationByUserId();

  console.log(data);

  return (
    <>
      {data.fetchReservationsByUserId.map((el: IReservation) => (
        <>
          {isSameDate(el.date) ? (
            <tbody id={el.id}>
              <tr>
                <th>{el.shop.name}</th>
                <th>{getDate(el.date)}</th>
                <th>{el.time}</th>
                <th>{el.dog.name}</th>
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
          ) : (
            <></>
          )}
        </>
      ))}
    </>
  );
};
