import { StarRate } from "../../StarRate";
import { CommentsFooter } from "../Footer";
import * as S from "../index.styles";

export interface IShopLabelProps {
  date?: string;
  time?: string;
  address?: string;
  phone?: string;
  shoppingLabel?: string;
  star?: number;
  id?: string;
  buttonState?: boolean;
}

export const CommentsHeader = (props: IShopLabelProps): JSX.Element => {
  return (
    <>
      <S.CommentsHeaderModalStyles>
        <S.CommentsBoxModalStyles>
          <S.CommentsHeaderModalTitleStyles>
            <S.ShopIconStyles />
            <h1>{props.shoppingLabel}</h1>
            <StarRate star={props.star} state={true}></StarRate>
          </S.CommentsHeaderModalTitleStyles>
          <CommentsFooter
            address={props.address}
            phone={props.phone}
            date={props.date}
            time={props.time}
            id={props.id}
            buttonState={props.buttonState}
          />
        </S.CommentsBoxModalStyles>
      </S.CommentsHeaderModalStyles>
    </>
  );
};
