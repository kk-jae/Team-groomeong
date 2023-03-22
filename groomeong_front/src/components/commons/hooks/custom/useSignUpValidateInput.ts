import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";
import { UseMutationCheckValidToken } from "../mutation/UseMutationCheckValidToken";
import { UseMutationGetTokenEmail } from "../mutation/UseMutationGetTokenEmail";

export const useSignUpValidateInput = () => {
  const [getTokenEmail] = UseMutationGetTokenEmail();
  const [checkValidToken] = UseMutationCheckValidToken();
  const { getValues } = useFormContext();
  const [validation, setValidation] = useState({
    authNumber: "",
    emailToken: "",
    time: 180,
    emailAuth: false,
    valid: false,
    error: "",
  });

  const email = getValues("email");

  // mutation 으로 검증 되면.. 밑의 if 조건문 작동
  const onClickEmailAuth = async () => {
    if (email.includes("@")) {
      const result = await getTokenEmail({
        variables: {
          email,
        },
      });
      console.log(result.data);
      setValidation((prev) => ({
        ...prev,
        emailAuth: true,
        emailToken: String(result.data?.getTokenEmail),
      }));
    } else if (email === "") {
      setValidation((prev) => ({
        ...prev,
        error: "잘못된 이메일형식 입니다.",
      }));
    } else {
      setValidation((prev) => ({
        ...prev,
        error: "중복된 이메일 입니다.",
      }));
    }
  };

  const getTimer = (t: number) => {
    if (t >= 0) {
      const min = Math.floor(t / 60);
      const sec = String(Math.floor(t % 60)).padStart(2, "0");
      return `${min}:${sec}`;
    }
  };

  const onChangeAuthNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setValidation((prev) => ({
      ...prev,
      authNumber: e.target.value,
    }));
  };

  const onClickAuthValidate = async () => {
    if (validation.authNumber === validation.emailToken) {
      const { data } = await checkValidToken({
        variables: {
          email,
          token: validation.emailToken,
        },
      });
      console.log(data);
      setValidation((prev) => ({
        ...prev,
        valid: true,
        error: "",
      }));
    } else {
      setValidation((prev) => ({
        ...prev,
        valid: false,
        error: "인증번호가 다릅니다.",
      }));
    }
  };

  return {
    onClickEmailAuth,
    onChangeAuthNumber,
    getTimer,
    onClickAuthValidate,
    validation,
    setValidation,
  };
};
