import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { useFormContext } from "react-hook-form";
import { IMutationCreateUserArgs } from "../../../../commons/types/generated/types";
import { UseMutationCreateUser } from "../mutation/UseMutationCreateUser";

export const useSignUp = () => {
  const [createUser] = UseMutationCreateUser();
  const { getValues } = useFormContext();
  const [validation, setValidation] = useState({
    authNumber: "",
    time: 180,
    emailAuth: false,
    valid: false,
    error: "",
  });

  const email = getValues("email");

  // mutation 으로 검증 되면.. 밑의 if 조건문 작동
  const onClickEmailAuth = () => {
    if (email.includes("@")) {
      setValidation((prev) => ({
        ...prev,
        emailAuth: true,
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

  const onClickAuthValidate = () => {
    if (validation.authNumber === "123") {
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
  const onClickSignUp = async (
    data: IMutationCreateUserArgs
  ): Promise<void> => {
    try {
      const result = await createUser({
        variables: {
          name: data.name,
          email: data.email,
          password: data.password,
          phone: data.phone,
        },
      });
      console.log(result);
      // 회원가입 성공 Modal
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return {
    onClickEmailAuth,
    onChangeAuthNumber,
    getTimer,
    onClickAuthValidate,
    validation,
    setValidation,
    onClickSignUp,
  };
};
