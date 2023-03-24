import {
  FETCH_RESERVATION_BY_USER_ID,
  UseQueryFetchReservationByUserId,
} from "../../../commons/hooks/query/UseQueryFetchReservationByUserId";
import { getDate } from "../../../commons/libraries/GetDate";
import { Buttons } from "../Buttons";
import { IReservation } from "../../../../commons/types/generated/types";
import { isSameDate } from "../../../commons/libraries/GetTimeStamp";
import { UseMutationDeleteReservation } from "../../../commons/hooks/mutation/UseMutationDeleteReservation";
import { v4 as uuidv4 } from "uuid";
import { IButtonProps } from "../ButtonCommons/index.styles";
import { HtmlHTMLAttributes } from "react";

export const ReservationTable = () => {
  const { data } = UseQueryFetchReservationByUserId();
  const [deleteReservation] = UseMutationDeleteReservation();

  const onClickDelete = async (event: string) => {
    try {
      await deleteReservation({
        variables: { reservationId: event.currentTarget.id },
        refetchQueries: [{ query: FETCH_RESERVATION_BY_USER_ID }],
      });
      alert("예약이 취소되었습니다");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      {data?.fetchReservationsByUserId.map((el: IReservation) => (
        <>
          {!isSameDate(el.date) ? (
            <tbody key={uuidv4()}>
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
