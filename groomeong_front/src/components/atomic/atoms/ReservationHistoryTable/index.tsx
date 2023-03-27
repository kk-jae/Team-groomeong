import { IReservation } from "../../../../commons/types/generated/types";
import { getDate } from "../../../commons/libraries/GetDate";
import { isSameDate } from "../../../commons/libraries/GetTimeStamp";
import { UseQueryFetchReservationByUser } from "../../../commons/hooks/query/UseQueryFetchReservationByUserId";
import { Buttons } from "../Buttons";
import { MouseEvent, useState } from "react";
import { ReviewModal } from "../../organisms/ReviewModal";
import { UseQueryFetchShopWithReviewAuth } from "../../../commons/hooks/query/UseQueryFetchShopWithReviewAuth";
import { v4 as uuidv4 } from "uuid";

export const ReservationHistoryTable = () => {
  const [shopId, setShopId] = useState("");
  const { data } = UseQueryFetchReservationByUser();
  const { data: reviewData } = UseQueryFetchShopWithReviewAuth(shopId);
  const [reservationId, setReservationId] = useState("");
  const [onReview, setOnReview] = useState(false);

  const onClickReview = (event: MouseEvent<HTMLButtonElement>): void => {
    void setOnReview(true);
    void setShopId(event.currentTarget.className.split(" ")[0]);
    void setReservationId(event.currentTarget.id);
  };

  const onClickCancel = (): void => {
    void setOnReview(false);
  };

  return (
    <>
      {data ? (
        data?.fetchReservationsByUser.map((el: IReservation) => (
          <>
            {!isSameDate(el.date) ? (
              <></>
            ) : (
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
                        label="리뷰 쓰기"
                        border="none"
                        size="small"
                        type="button"
                        onClick={onClickReview}
                        id={el.id}
                        className={el.shop.id}
                      ></Buttons>

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
