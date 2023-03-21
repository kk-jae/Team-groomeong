import { CommentsHeader } from "../../atoms/Comments/Header";
import { TextArea } from "../../atoms/TextArea/TextArea";
import React, { useState } from "react";
import * as S from "./index.style";
import { Comment } from "../../atoms/Comment";
import * as GS from "../../../../../theme/global";
import { Buttons } from "../../atoms/Buttons";

interface IShopDetailProps {
  isLoggedIn: boolean;

  icon?: string;
  date?: string;
  time?: string;
  address?: string;
  phone?: string;
  shoppingLabel?: string;
  shopRating?: number;

  commentWriteContents?: string;
  commentWriteDate?: string;
  commentWriteName?: string;
  commentWriteIconView?: boolean;
  buttonView?: boolean;
  commentWritePlaceholder?: string;
  commentWriteRating?: number;

  commentListRating?: number;
  commentListContents?: string;
  commentListDate?: string;
  commentListName?: string;
  commentListStarRate?: number;
  commentListStarState?: boolean;
}

export const ShopDetail = (props: IShopDetailProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Buttons onClick={showModal} label="샵 정보보기"></Buttons>
      <S.ShopDetailModal
        open={isModalOpen}
        onCancel={showModal}
        maskStyle={{ background: GS.blue[900], opacity: 0.8 }}
      >
        <S.ShopDetailWrapper>
          <S.ShopImage src="image/example-shop.jpeg"></S.ShopImage>
          <CommentsHeader
            star={props.shopRating}
            date={"월, 화, 수, 목, 금, 토, 일"}
            time={props.time}
            address={props.address}
            phone={props.phone}
            shoppingLabel={props.shoppingLabel}
          ></CommentsHeader>
          {props.isLoggedIn ? (
            <TextArea
              commentRating={props.commentListRating}
              contents={props.commentListContents}
              date={props.commentWriteDate}
              name={props.commentListName}
              iconView={props.commentWriteIconView}
              buttonView={true}
              placeholder={
                "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              }
            />
          ) : (
            <></>
          )}
          <Comment
            contents={props.commentListContents}
            date={props.commentListDate}
            name={props.commentListName}
            rate={props.commentListStarRate}
            state={true}
            iconView={true}
          ></Comment>
          <Comment iconView={true} state={true}></Comment>
          <Comment iconView={true} state={true}></Comment>
        </S.ShopDetailWrapper>
      </S.ShopDetailModal>
    </>
  );
};
