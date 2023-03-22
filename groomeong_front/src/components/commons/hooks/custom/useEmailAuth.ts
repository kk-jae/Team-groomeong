import { useState } from "react";
import { Modal } from "antd";
import { UseMutationGetTokenEmail } from "./../mutation/UseMutationGetTokenEmail";

export const useEmailAuth = () => {
  const [getTokenEmail] = UseMutationGetTokenEmail();
  const [randomToken, setRandomToken] = useState("");

  interface IEmail {
    email: string;
  }
  interface IEmailTokenData {
    email: string;
    token: string;
  }

  const sendEmail = (data: IEmail) => async () => {
    try {
      const result = await getTokenEmail({
        variables: {
          email: data.email,
        },
      });
      Modal.success({
        content: "인증메일을 발송하였습니다.",
      });
      setRandomToken(`${result.data?.getTokenEmail}`);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  const onClickCheckToken = (data: IEmailTokenData) => {
    if (data.token === randomToken) {
      Modal.success({
        content: "인증이 완료 되었습니다.",
      });
    } else {
      Modal.error({
        content: "인증번호가 다릅니다.",
      });
    }
  };

  return { sendEmail, onClickCheckToken };
};
