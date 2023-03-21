import {
  Label,
  ValidateWrapper,
  ValidateInputWrapper,
  ValidationInput,
  Error,
  ValidateDiv,
} from "../index.styles";
import { ChangeEvent, useEffect, useState } from "react";
import { Buttons } from "../../../atoms/Buttons";
import { useFormContext } from "react-hook-form";


const SignUpValidateInput = () => {
  // const [validation, setValidation] = useState<boolean>(false);
  // const [authNumber, setAuthNumber] = useState<string>();
  // const [time, setTime] = useState<number>(180);
  // const [emailAuth, setEmailAuth] = useState<Boolean>(false);
  // const [error, setError] = useState<boolean>(false)
  const [validation, setValidation] = useState({
    authNumber: "",
    time: 180,
    emailAuth: false,
    valid: false,
    error: "",
  });

  const { getValues } = useFormContext();

  const onClickEmailAuth = () => {
    const email = getValues("email");
    // mutation 으로 검증 되면.. 밑의 if 조건문 작동
    if (email.includes("@")) {
      setValidation((prev) => ({
        ...prev,
        emailAuth: true,
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

  useEffect(() => {
    if (validation.emailAuth) {
      const id = setInterval(() => {
        if (validation.time > 0 && !validation.valid) {
          setValidation((prev) => ({
            ...prev,
            time: prev.time - 1,
          }));
        } else {
          clearInterval(id);
          setValidation((prev) => ({
            ...prev,
            time: 180,
            emailAuth: false,
            authNumber: "",
          }));
        }
      }, 1000);
      return () => clearInterval(id);
    }
  }, [validation]);

  console.log(validation);
  return (
    <ValidateWrapper>
      <ValidateInputWrapper>
        <ValidationInput
          placeholder="인증번호를 입력해주세요."
          disabled={!validation.emailAuth as boolean}
          onChange={onChangeAuthNumber}
          error={validation.error }
        />
        <Label>{validation.emailAuth ? getTimer(validation.time) : "인증번호"}</Label>
        <div style={{ marginTop: "1rem" }}>
          <Error>{validation.error}</Error>
        </div>
      </ValidateInputWrapper>
      <ValidateDiv>
        <div>
          <button type="button" onClick={onClickAuthValidate}>
            인증하기
          </button>
          <Buttons
            label="인증하기"
            size="small"
            state={!validation.emailAuth || validation ? "disabled" : undefined}
            border="none"
          />
        </div>
        <div style={{ marginLeft: "1rem" }}>
          <button type="button" onClick={onClickEmailAuth}>
            이메일 인증하기
          </button>
          <Buttons
            label="이메일 인증하기"
            size="small"
            border="none"
            state={validation.emailAuth || validation ? "disabled" : undefined}
          />
        </div>
      </ValidateDiv>
    </ValidateWrapper>
  );
};

export default SignUpValidateInput;
