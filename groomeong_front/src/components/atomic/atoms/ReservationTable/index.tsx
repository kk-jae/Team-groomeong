import { UseQueryFetchReservationByUserId } from "../../../commons/hooks/query/UseQueryFetchReservationByUserId";
import { getDate } from "../../../commons/libraries/GetDate";
import { Buttons } from "../Buttons";
import { IReservation } from "../../../../commons/types/generated/types";
import { isSameDate } from "../../../commons/libraries/GetTimeStamp";
import { UseMutationDeleteReservation } from "../../../commons/hooks/mutation/UseMutationDeleteReservation";
import { v4 as uuidv4 } from "uuid";

export const ReservationTable = () => {
  const { data } = UseQueryFetchReservationByUserId();
  const [deleteReservation] = UseMutationDeleteReservation(
    data?.fetchReservationsByUserId.id
  );

  const onClickDelete = async (event: string) => {
    try {
      // if {data?.fetchReservationsByUserId.id.map((el), el) === event.currentTarget.id}{
      // }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
      console.log("실패");
    }
  };

  return (
    <>
      {data?.fetchReservationsByUserId.map((el: IReservation) => (
        <>
          {!isSameDate(el.date) ? (
            <tbody key={el.id}>
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
                      onClick={onClickDelete}
                      id={el.id}
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
