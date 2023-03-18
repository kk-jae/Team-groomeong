import * as S from "./index.styles";
import React, { useState } from "react";
import { Button } from "../ButtonSize/ButtonSmall/Button";

interface IModalProps {
  title: string;
  contents: string;
  state: boolean;
}

export const Modal: React.FC<IModalProps> = (props): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (): void => {
    void setIsModalOpen(true);
  };

  const handleOk = (): void => {
    void setIsModalOpen(false);
  };

  const handleCancel = (): void => {
    void setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>오픈모달</button>
      {/* <Button onClick={showModal}>모달 열기</Button> */}

      <S.ModalStyles
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title={<S.ScreamerIcon state={props.state} />}
        state={props.state}
      >
        <h3>{props.title}</h3>
        <p>{props.contents}</p>
      </S.ModalStyles>
    </>
  );
};
