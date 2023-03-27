import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "antd";
import { UseMutationGetTokenEmail } from "./../mutation/UseMutationGetTokenEmail";

export interface IEmail {
  email?: string;
  token?: string;
}

interface IuseEmailAuth {
  sendEmail: (data: IEmail) => () => Promise<void>;
  onClickCheckToken: (data: IEmail) => void;
  isOpenRandomCode: boolean;
  clearTimer: boolean;
}

export const useEmailAuth = (): IuseEmailAuth => {
  const router = useRouter();
  const [getTokenEmail] = UseMutationGetTokenEmail();
  const [randomToken, setRandomToken] = useState("");
  const [isOpenRandomCode, setIsOpenRandomCode] = useState(false);
  const [clearTimer, setClearTimer] = useState(false);

  const sendEmail = (data: IEmail) => async () => {
    try {
      const result = await getTokenEmail({
        variables: {
          email: String(data.email),
        },
      });
      Modal.success({
        content: "인증메일을 발송하였습니다.",
      });
      setRandomToken(`${String(result.data?.getTokenEmail)}`);
      setIsOpenRandomCode(true);
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  const onClickCheckToken = (data: IEmail): void => {
    if (data.token === randomToken) {
      Modal.success({
        content: "인증이 완료 되었습니다.",
      });
      void router.push("/initPassword");
      setClearTimer(true);
    } else {
      Modal.error({
        content: "인증번호가 다릅니다.",
      });
    }
  };

  return { sendEmail, onClickCheckToken, isOpenRandomCode, clearTimer };
};
