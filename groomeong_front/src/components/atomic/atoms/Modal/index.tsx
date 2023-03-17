import * as S from "./index.styles";
import React, { useState } from "react";

interface IModalProps {
  title: string;
  contents: string;
  state: boolean;
}

export const Modal: React.FC<IModalProps> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <></>
    //   <>
    //     <button type="primary" onClick={showModal}>
    //       Open Modal
    //     </button>

    //     <S.ModalStyles
    //       centered
    //       title={<S.ScreamerIcon state={props.state} />}
    //       open={isModalOpen}
    //       onOk={handleOk}
    //       onCancel={handleCancel}
    //       state={props.state}
    //     >
    //       <h3>{props.title}</h3>
    //       <p>{props.contents}</p>
    //     </S.ModalStyles>
    //   </>
  );
};
