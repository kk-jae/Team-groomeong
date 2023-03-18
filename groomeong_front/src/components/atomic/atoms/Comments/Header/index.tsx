import { useState } from "react";
import { CommentsFooter } from "../Footer";
import * as S from "../index.styles";

export interface IShopLabelProps {
  date?: string;
  time?: string;
  address?: string;
  phone?: string;
  shoppingLabel?: string;
}

export const CommentsHeader = (props: IShopLabelProps) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen((prev) => !prev);
  };

  const handleOk = () => {
    setOpen((prev) => !prev);
  };

  const handleCancel = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <button onClick={showModal}>Open Modal with customized footer</button>
      <S.CommentsHeaderModalStyles
        open={open}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <S.CommentsBoxModalStyles>
          <S.CommentsHeaderModalTitleStyles>
            <S.ShopIconStyles />
            <h1>{props.shoppingLabel}</h1>
            {/* <h1>Shop Label</h1> */}

            <span>badge</span>
          </S.CommentsHeaderModalTitleStyles>
          <CommentsFooter
            address={props.address}
            phone={props.phone}
            date={props.date}
            time={props.time}
          />
        </S.CommentsBoxModalStyles>
      </S.CommentsHeaderModalStyles>
    </>
  );
};
