import {
  Label,
  ValidateWrapper,
  ValidateInputWrapper,
  ValidationInput,
  Error,
  ValidateDiv,
} from "../../atomic/organisms/SignUp/index.styles";
import { useEffect } from "react";
import { Buttons } from "../../atomic/atoms/Buttons";
import { useSignUp } from "../../commons/hooks/custom/useSignUp";
import { InputMiddle } from "../../atomic/atoms/Input/Middle";

const SignUpValidateInput = () => {
  const {
    validation,
    setValidation,
    getTimer,
    onChangeAuthNumber,
    onClickAuthValidate,
    onClickEmailAuth,
  } = useSignUp();

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
  }, [setValidation, validation]);

  console.log(validation);
  return (
    <>
      <InputMiddle
        label="이메일"
        name="email"
        placeholder="인증번호를 입력해주세요."
        disabled={validation.valid}
      />
      <ValidateWrapper>
        <ValidateInputWrapper>
          <ValidationInput
            placeholder="인증번호를 입력해주세요."
            disabled={!validation.emailAuth as boolean}
            onChange={onChangeAuthNumber}
            error={validation.error}
          />
          <Label>
            {validation.emailAuth ? getTimer(validation.time) : "인증번호"}
          </Label>
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
              state={
                !validation.emailAuth || validation ? "disabled" : undefined
              }
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
              state={
                validation.emailAuth || validation ? "disabled" : undefined
              }
            />
          </div>
        </ValidateDiv>
      </ValidateWrapper>
    </>
  );
};

export default SignUpValidateInput;
