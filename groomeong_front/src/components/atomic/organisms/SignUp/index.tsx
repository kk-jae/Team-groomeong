import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Buttons } from "../../atoms/Buttons";
import { InputMiddle } from "../../atoms/Input/Middle";
import PageHeader from "../../atoms/PageHeader";
import { Schema } from "../../../commons/validation/signUp.validation";
import SignUpValidateInput from "../../../units/SignUpValidateInput";
import { IMutationCreateUserArgs } from "../../../../commons/types/generated/types";
import { withPromiseVoidFunc } from "../../../../commons/Utils/withFunc";
import { useSignUp } from "../../../commons/hooks/custom/useSignUp";
import { SignUpForm, SignUpWrapper } from "./index.styles";

const SignUp = (): JSX.Element => {
  const [valid, setValid] = useState(false);
  const method = useForm<IMutationCreateUserArgs>({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });
  const { onClickSignUp } = useSignUp();

  return (
    <SignUpWrapper>
      <PageHeader title="회원가입" />
      <FormProvider {...method}>
        <SignUpForm
          onSubmit={method.handleSubmit(withPromiseVoidFunc(onClickSignUp))}
        >
          <SignUpValidateInput setValid={setValid} />
          <InputMiddle
            label="닉네임"
            name="name"
            placeholder="닉네임을 입력해주세요."
          />
          <InputMiddle
            label="비밀번호"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            type="password"
          />
          <InputMiddle
            label="비밀번호 확인"
            name="checkPassword"
            placeholder="비밀번호를 입력해주세요."
            type="password"
          />
          <InputMiddle
            label="연락처"
            name="phone"
            placeholder="연락처를 입력해주세요."
            type="text"
          />
          <Buttons
            label="회원가입하기"
            type="submit"
            size="large"
            border="none"
            state={valid ? undefined : "disabled"}
            variation="primary"
          />
        </SignUpForm>
      </FormProvider>
    </SignUpWrapper>
  );
};

export default SignUp;
