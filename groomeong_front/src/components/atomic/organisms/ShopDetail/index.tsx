import { CommentsHeader } from "../../atoms/Comments/Header";
import * as S from "./index.style";
import { Comment } from "../../atoms/Comment";
import * as GS from "../../../../../theme/global";
import { UseQueryFetchShop } from "../../../commons/hooks/query/UseQueryFetchShop";
import { UseQueryFetchReviewsByShopId } from "../../../commons/hooks/query/UseQueryFetchReviewsByShopId";
import { MouseEvent } from "react";
import { useRouter } from "next/router";

interface IShopDetailProps {
  isLoggedIn?: string;
  id?: string;
  showModal?: (e: MouseEvent<HTMLElement>) => void;
}

export const ShopDetail = (props: IShopDetailProps): JSX.Element => {
  const router = useRouter();
  const { data } = UseQueryFetchShop(String(router.query.shopId));
  const { data: review } = UseQueryFetchReviewsByShopId(
    String(router.query.shopId)
  );

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
            buttonState={true}
          ></CommentsHeader>
          {review?.fetchReviewsByShopId.map((el) => (
            <Comment
              key={el.id}
              contents={el.contents}
              date={el.createdAt}
              rate={el.star}
              state={true}
              iconView={true}
              shopId={String(router.query.shopId)}
            ></Comment>
          ))}
        </S.ShopDetailWrapper>
      </S.ShopDetailModal>
    </>
  );
};
