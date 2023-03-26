import { CommentsHeader } from "../../atoms/Comments/Header";
import { TextArea } from "../../atoms/TextArea/TextArea";
import * as S from "./index.style";
import { Comment } from "../../atoms/Comment";
import * as GS from "../../../../../theme/global";
import { UseQueryFetchShop } from "../../../commons/hooks/query/UseQueryFetchShop";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/Store";
import { useCreateReview } from "../../../commons/hooks/custom/useCreateReview";
import { UseQueryFetchReviewsByShopId } from "../../../commons/hooks/query/UseQueryFetchReviewsByShopId";
import { MouseEvent } from "react";

interface IShopDetailProps {
  isLoggedIn?: string;
  id?: string;
  showModal?: (e: MouseEvent<HTMLElement>) => void;
}

export const ShopDetail = (props: IShopDetailProps) => {
  const [accessToken] = useRecoilState(accessTokenState);
  const { data } = UseQueryFetchShop(props.id);
  const { data: review } = UseQueryFetchReviewsByShopId(String(props.id));
  const { onClickCreateReview } = useCreateReview();

  return (
    <>
      <S.ShopDetailModal
        open={true}
        onCancel={props.showModal}
        maskStyle={{ background: GS.blue[900], opacity: 0.8 }}
      >
        <S.ShopDetailWrapper>
          <S.ShopImage
            src={
              data?.fetchShop?.image[0]
                ? `https://storage.googleapis.com/${data?.fetchShop?.image[0].imageUrl}`
                : "/image/img_shop_default.svg"
            }
          ></S.ShopImage>
          <CommentsHeader
            star={data?.fetchShop.averageStar}
            date={"월, 화, 수, 목, 금, 토, 일"}
            time={`${data?.fetchShop.openHour} ~ ${data?.fetchShop.closeHour}`}
            address={data?.fetchShop.address}
            phone={data?.fetchShop.phone}
            shoppingLabel={data?.fetchShop.name}
            id={data?.fetchShop.id}
            buttonState={true}
          ></CommentsHeader>
          {accessToken ? (
            <TextArea
              // commentRating={}
              // contents={}
              // date={}
              // name={}
              // iconView={}
              buttonView={true}
              placeholder={
                "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              }
              onClick={onClickCreateReview}
            />
          ) : (
            <></>
          )}
          {review?.fetchReviewsByShopId.map((el) => (
            <Comment
              key={el.id}
              contents={el.contents}
              date={el.createAt}
              rate={el.star}
              state={true}
              iconView={true}
            ></Comment>
          ))}
        </S.ShopDetailWrapper>
      </S.ShopDetailModal>
    </>
  );
};
