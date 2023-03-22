import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Buttons } from "../../atoms/Buttons";
import { InputMiddle } from "../../atoms/Input/Middle";
import PageHeader from "../../atoms/PageHeader";
import { SignUpForm, SignUpWrapper } from "./index.styles";
import { Schema } from "../../../commons/validation/signUp.validation";
import SignUpValidateInput from "../../../units/SignUpValidateInput";
import { IMutationCreateUserArgs } from "../../../../commons/types/generated/types";
import { withPromiseVoidFunc } from "../../../../commons/Utils/withFunc";
import { useSignUp } from "../../../commons/hooks/custom/useSignUp";

const SignUp = () => {
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
          // onSubmit={method.handleSubmit(withPromiseVoidFunc(onClickSignUp))}
          onSubmit={method.handleSubmit(withPromiseVoidFunc(onClickSignUp))}
        >
          <SignUpValidateInput />
          <InputMiddle
            label="닉네임"
            name="nickName"
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
            size="large"
            border="none"
            variation="primary"
          />
        </SignUpForm>
      </FormProvider>
    </SignUpWrapper>
  );
};

export default SignUp;
