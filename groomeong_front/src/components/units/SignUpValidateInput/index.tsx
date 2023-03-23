import {
  Label,
  ValidateWrapper,
  ValidateInputWrapper,
  ValidationInput,
  Error,
  ValidateDiv,
} from "./index.styles";
import { Dispatch, SetStateAction, useRef } from "react";
import { useEffect } from "react";
import { Buttons } from "../../atomic/atoms/Buttons";
import { useSignUpValidateInput } from "../../commons/hooks/custom/useSignUpValidateInput";
import { InputMiddle } from "../../atomic/atoms/Input/Middle";

interface ISignUpvalidateInputProps {
  setValid: Dispatch<SetStateAction<boolean>>;
}
interface IValidation {
  authNumber: string;
  emailToken: string;
  time: number;
  emailAuth: boolean;
  valid: boolean;
  error: string;
}

const SignUpValidateInput = (props: ISignUpvalidateInputProps) => {
  const validationInput = useRef<HTMLInputElement>(null)
  const {
    validation,
    setValidation,
    getTimer,
    onChangeAuthNumber,
    onClickAuthValidate,
    onClickEmailAuth,
  } = useSignUpValidateInput(props.setValid);

  useEffect(() => {
    if (validation.emailAuth && validationInput.current !== null) {
      const id = setInterval(() => {
        if (validation.time > 0 && !validation.valid) {
          setValidation((prev: IValidation) => ({
            ...prev,
            time: prev.time - 1,
          }));
        } else {
          if (validationInput.current !== null) {
            validationInput.current.value = ""
          }
          clearInterval(id);
          setValidation((prev: IValidation) => ({
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

  return (
    <>
      <InputMiddle
        label="이메일"
        name="email"
        placeholder="이메일을 입력해주세요."
        disabled={validation.emailAuth || validation.valid}
      />
      <ValidateWrapper>
        <ValidateInputWrapper>
          <ValidationInput
            ref={validationInput}
            placeholder="인증번호를 입력해주세요."
            disabled={!validation.emailAuth as boolean}
            onChange={onChangeAuthNumber}
            error={validation.error}
            value={validation.valid ? "인증완료" : undefined}
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
            <Buttons
              type="button"
              variation="primary"
              label="인증하기"
              size="small"
              state={!validation.emailAuth ? "disabled" : undefined}
              border="none"
              onClick={onClickAuthValidate}
            />
          </div>
          <div style={{ marginLeft: "1rem" }}>
            <Buttons
              type="button"
              variation="primary"
              label="이메일 인증하기"
              size="small"
              border="none"
              onClick={onClickEmailAuth}
              state={
                validation.emailAuth
                  ? "disabled"
                  : !validation.emailAuth && validation.valid
                  ? "disabled"
                  : undefined
              }
            />
          </div>
        </ValidateDiv>
      </ValidateWrapper>
    </>
  );
};

export default SignUpValidateInput;
