import { CommentsHeader } from "../../atoms/Comments/Header";
import * as S from "./index.style";
import { Comment } from "../../atoms/Comment";
import * as GS from "../../../../../theme/global";
import { UseQueryFetchShop } from "../../../commons/hooks/query/UseQueryFetchShop";
import { MouseEvent } from "react";
import { useRouter } from "next/router";
import { Buttons } from "../../atoms/Buttons";
import { useMoveToPage } from "../../../commons/hooks/custom/useMovedToPage";

interface IShopDetailProps {
  isLoggedIn?: string;
  id?: string;
  showModal?: (e: MouseEvent<HTMLElement>) => void;
}

export const ShopDetail = (props: IShopDetailProps): JSX.Element => {
  const router = useRouter();
  const { data } = UseQueryFetchShop(String(router.query.shopId));

  const { onClickMoveToPage } = useMoveToPage();

  return (
    <>
      <S.ShopDetailModal
        open={true}
        onCancel={() => {
          router.back();
        }}
        maskStyle={{ background: GS.blue[900], opacity: 0.8 }}
      >
        <S.ShopDetailWrapper>
          <S.ShopImage
            src={
              data?.fetchShop?.image?.[0] !== undefined
                ? `https://storage.googleapis.com/${data?.fetchShop?.image?.[0].imageUrl}`
                : "/image/img_shop_default.svg"
            }
          />

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
            buttonState={true}
          ></CommentsHeader>
          <S.ShopReservationBtn>
            <Buttons
              label="예약하기"
              variation="primary"
              border="none"
              size="medium"
              onClick={onClickMoveToPage(
                `/map/${String(router.query.shopId)}/reservation`
              )}
            />
          </S.ShopReservationBtn>
          {data?.fetchShop?.reservation?.map((el, index) =>
            el.review !== null ? (
              <Comment
                key={el.id}
                contents={data.fetchShop.reservation?.[index].review?.contents}
                date={el.review?.createdAt}
                rate={el.review?.star}
                state={true}
                iconView={true}
                shopId={String(router.query.shopId)}
                name={data.fetchShop.reservation?.[index].user.name}
                image={String(data.fetchShop.reservation?.[index].user.image)}
              ></Comment>
            ) : (
              <div key={index}>
                <div></div>
              </div>
            )
          )}
        </S.ShopDetailWrapper>
      </S.ShopDetailModal>
    </>
  );
};
