import { getDate } from "../../../commons/libraries/GetDate";
import { IReservation } from "../../../../commons/types/generated/types";
import { isSameDate } from "../../../commons/libraries/GetTimeStamp";
import { UseMutationDeleteReservation } from "../../../commons/hooks/mutation/UseMutationDeleteReservation";
import { v4 as uuidv4 } from "uuid";
import { MouseEvent } from "react";
import {
  FETCH_RESERVATIONS_BY_USER,
  UseQueryFetchReservationByUser,
} from "../../../commons/hooks/query/UseQueryFetchReservationByUserId";
import { useMoveToPage } from "../../../commons/hooks/custom/useMovedToPage";
import { Th } from "./index.styled";
import { Modal } from "antd";

export const ReservationTable = (): JSX.Element => {
  const { data } = UseQueryFetchReservationByUser();
  const [deleteReservation] = UseMutationDeleteReservation();
  const { onClickMoveToPage } = useMoveToPage();

  const onClickDelete = async (
    event: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    try {
      await deleteReservation({
        variables: { reservationId: event.currentTarget.id },
        refetchQueries: [{ query: FETCH_RESERVATIONS_BY_USER }],
      });
      Modal.success({
        content: "예약이 취소되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      {data?.fetchReservationsByUser.map((el: IReservation, index) => (
        <>
          {!isSameDate(el.date) ? (
            <tbody key={uuidv4()}>
              <tr>
                <Th
                  onClick={onClickMoveToPage(
                    `/map/${data?.fetchReservationsByUser[index].shop.id}/detail`
                  )}
                >
                  {el.shop.name}
                </Th>
                <th>{getDate(el.date)}</th>
                <th>{el.time}</th>
                <th>{el.dog.name}</th>
                <th>
                  <div>
                    <button onClick={onClickDelete} id={el.id}>
                      예약 취소
                    </button>
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
