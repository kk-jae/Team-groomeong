import { Buttons } from "../../Buttons";
import { IShopLabelProps } from "../Header";
import * as S from "../index.styles";

export const CommentsFooter = (props: IShopLabelProps) => {
  return (
    <>
      <S.CommentsFooterModalStyles>
        <S.CommentsFooterModalLabelStyles>
          <S.FooterLabelNameStyles>
            <label>영업일</label>
            <label>시간</label>
            <label>주소</label>
            <label>연락처</label>
          </S.FooterLabelNameStyles>
          <S.FooterLabelNameStyles>
            <label>{props.date}</label>
            <label>{props.time}</label>
            <label>{props.address}</label>
            <label>{props.phone}</label>
          </S.FooterLabelNameStyles>
        </S.CommentsFooterModalLabelStyles>
        <S.FooterModalButtonBox>
          <Buttons
            label="예약하기"
            variation="primary"
            border="none"
            size="medium"
          />
        </S.FooterModalButtonBox>
      </S.CommentsFooterModalStyles>
    </>
  );
};
