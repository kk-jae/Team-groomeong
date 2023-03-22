import {
  Label,
  ValidateWrapper,
  ValidateInputWrapper,
  ValidationInput,
  Error,
  ValidateDiv,
} from "./index.styles";
import { Dispatch, SetStateAction, useEffect } from "react";
import { Buttons } from "../../atomic/atoms/Buttons";
import { useSignUpValidateInput } from "../../commons/hooks/custom/useSignUpValidateInput";
import { InputMiddle } from "../../atomic/atoms/Input/Middle";

interface ISignUpvalidateInputProps {
  setValid: Dispatch<SetStateAction<boolean>>;
}

const SignUpValidateInput = (props: ISignUpvalidateInputProps) => {
  const {
    validation,
    setValidation,
    getTimer,
    onChangeAuthNumber,
    onClickAuthValidate,
    onClickEmailAuth,
  } = useSignUpValidateInput(props.setValid);

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

  return (
    <>
      <InputMiddle
        label="이메일"
        name="email"
        placeholder="인증번호를 입력해주세요."
        disabled={validation.emailAuth || validation.valid}
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
