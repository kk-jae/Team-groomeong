import { CommentsHeader } from "../../atoms/Comments/Header";
import { TextArea } from "../../atoms/TextArea/TextArea";
import * as S from "./index.style";
import * as GS from "../../../../../theme/global";
import { UseQueryFetchShop } from "../../../commons/hooks/query/UseQueryFetchShop";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/Store";
import { MouseEvent } from "react";
import { UseQueryFetchShopWithReviewAuth } from "../../../commons/hooks/query/UseQueryFetchShopWithReviewAuth";
import { UseQueryFetchReviewsByShopIdReservation } from "../../../commons/hooks/query/UseQueryFetchReviewsByShopId-Reservation";

interface IReviewProps {
  isLoggedIn?: string;
  shopId: string;
  reservationId: string;
  showModal?: (e: MouseEvent<HTMLElement>) => void;
}

export const ReviewModal = (props: IReviewProps): JSX.Element => {
  const [accessToken] = useRecoilState(accessTokenState);
  const { data } = UseQueryFetchShop(props.shopId);
  const { data: review } = UseQueryFetchReviewsByShopIdReservation(
    props.shopId
  );
  const { data: shopReview } = UseQueryFetchShopWithReviewAuth(props.shopId);

  return (
    <>
      <S.ReviewModalStyle
        open={true}
        onCancel={props.showModal}
        maskStyle={{ background: GS.blue[900], opacity: 0.8 }}
      >
        <S.ShopDetailWrapper>
          <S.ShopImage
            src={
              data?.fetchShop?.image[0] != null
                ? `https://storage.googleapis.com/${data?.fetchShop?.image[0].imageUrl}`
                : "/image/img_shop_default.svg"
            }
          ></S.ShopImage>
          <CommentsHeader
            star={data?.fetchShop.averageStar}
            date={"월, 화, 수, 목, 금, 토, 일"}
            time={`${String(data?.fetchShop.openHour)} ~ ${String(
              data?.fetchShop.closeHour
            )}`}
            address={data?.fetchShop.address}
            phone={data?.fetchShop.phone}
            shoppingLabel={data?.fetchShop.name}
            id={data?.fetchShop.id}
            buttonState={false}
          ></CommentsHeader>
          {/*  eslint-disable-next-line @typescript-eslint/no-confusing-void-expression */}
          {review?.fetchReviewsByShopId?.map((el) => console.log(el.id))}
          {accessToken !== "" ? (
            <TextArea
              iconView={false}
              buttonView={true}
              placeholder={
                "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              }
              reservationId={props?.reservationId}
              shopId={props.shopId}
            />
          ) : (
            <></>
          )}
        </S.ShopDetailWrapper>
      </S.ReviewModalStyle>
    </>
  );
};
