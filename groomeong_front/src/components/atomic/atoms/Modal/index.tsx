import * as S from "./index.styles";
import React, { useEffect, useState } from "react";

interface IModalProps {
  title: string;
  contents: string;
  state: boolean;
  onModal?: boolean;
}

export const Modal: React.FC<IModalProps> = (
  title,
  contents,
  state
): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [title, setTitle] = useState(true);
  // const [contents, setContents] = useState(true);
  // const [state, setState] = useState(true);
  // const [onModal, setOnModal] = useState(true);

  useEffect(() => {
    setIsModalOpen(true);
  });

  // const showModal = (): void => {
  //   void setIsModalOpen(true);
  // };

  const handleOk = (): void => {
    setIsModalOpen(false);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* <button onClick={showModal}>오픈모달</button> */}
      {/* <Button onClick={showModal}>모달 열기</Button> */}

      <S.ModalStyles
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title={<S.ScreamerIcon state={state} />}
        state={state}
      >
        <h3>{title}</h3>
        <p>{contents}</p>
      </S.ModalStyles>
    </>
  );
};
