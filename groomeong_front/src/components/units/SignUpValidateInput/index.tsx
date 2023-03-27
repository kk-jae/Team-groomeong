import {
  Label,
  ValidateWrapper,
  ValidateInputWrapper,
  ValidationInput,
  Error,
  ValidateDiv,
} from "./index.styles";
import { Dispatch, SetStateAction } from "react";
import { Buttons } from "../../atomic/atoms/Buttons";
import { useSignUpValidateInput } from "../../commons/hooks/custom/useSignUpValidateInput";
import { InputMiddle } from "../../atomic/atoms/Input/Middle";
import { getTimer } from "../../../commons/Utils/getTimer";

interface ISignUpvalidateInputProps {
  setValid: Dispatch<SetStateAction<boolean>>;
}

const SignUpValidateInput = (props: ISignUpvalidateInputProps): JSX.Element => {
  const {
    validation,
    onChangeAuthNumber,
    onClickAuthValidate,
    onClickEmailAuth,
    validationInput,
    time,
  } = useSignUpValidateInput(props.setValid);

  console.log(validation);
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
            disabled={
              // !validation.emailAuth ? true : validation.valid ? true : false
              !validation.emailAuth ? true : !!validation.valid
            }
            onChange={onChangeAuthNumber}
            error={validation.error}
            value={validation.valid ? "인증완료" : undefined}
          />
          <Label>
            {!validation.valid && validation.emailAuth
              ? getTimer(time)
              : "인증번호"}
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
              state={
                !validation.emailAuth
                  ? "disabled"
                  : validation.valid
                  ? "disabled"
                  : undefined
              }
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
