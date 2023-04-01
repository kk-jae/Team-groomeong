/* eslint-disable @typescript-eslint/no-unused-vars */
import { IReservation } from "../../../../commons/types/generated/types";
import { getDate } from "../../../commons/libraries/GetDate";
import { isSameDate } from "../../../commons/libraries/GetTimeStamp";
import { UseQueryFetchReservationByUser } from "../../../commons/hooks/query/UseQueryFetchReservationByUserId";
import { MouseEvent, useState } from "react";
import { ReviewModal } from "../../organisms/ReviewModal";
import { UseQueryFetchShopWithReviewAuth } from "../../../commons/hooks/query/UseQueryFetchShopWithReviewAuth";
import { Th } from "./index.styled";
import { useMoveToPage } from "../../../commons/hooks/custom/useMovedToPage";

export const ReservationHistoryTable = (): JSX.Element => {
  const [shopId, setShopId] = useState("");
  const { data } = UseQueryFetchReservationByUser();
  const { data: reviewData } = UseQueryFetchShopWithReviewAuth(shopId);
  const [reservationId, setReservationId] = useState("");
  const [onReview, setOnReview] = useState(false);
  const { onClickMoveToPage } = useMoveToPage();

  const onClickReview = (event: MouseEvent<HTMLButtonElement>): void => {
    setOnReview(true);
    setShopId(event.currentTarget.className.split(" ")[0]);
    setReservationId(event.currentTarget.id);
  };

  const onClickCancel = (): void => {
    setOnReview(false);
  };

  return (
    <>
      {data !== null ? (
        data?.fetchReservationsByUser.map((el: IReservation, index) => (
          <>
            {!isSameDate(el.date) ? (
              <></>
            ) : (
              <tbody key={el.id}>
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
                      {el.review != null ? (
                        <div>작성 완료</div>
                      ) : (
                        <button
                          onClick={onClickReview}
                          id={el.id}
                          className={el.shop.id}
                        >
                          리뷰 작성
                        </button>
                      )}

                      {onReview ? (
                        <ReviewModal
                          reservationId={reservationId}
                          shopId={shopId}
                          showModal={onClickCancel}
                        ></ReviewModal>
                      ) : (
                        <></>
                      )}
                    </div>
                  </th>
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
