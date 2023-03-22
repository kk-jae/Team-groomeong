import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Buttons } from "../../atoms/Buttons";
import { InputMiddle } from "../../atoms/Input/Middle";
import PageHeader from "../../atoms/PageHeader";
import { SignUpForm, SignUpWrapper, SingUpDivider } from "./index.styles";
import { Schema } from "../../../commons/validation/signUp.validation";
import SignUpValidateInput from "../../../units/SignUpValidateInput";

const SignUp = () => {
  const method = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });

  return (
    <SignUpWrapper>
      <PageHeader title="회원가입" />
      <FormProvider {...method}>
        <SignUpForm onSubmit={method.handleSubmit((data) => console.log(data))}>
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
            type="submit"
            size="large"
            border="none"
            variation="primary"
            onClick={(data: any) => {
              console.log(data);
            }}
          />
        </SignUpForm>
      </FormProvider>
    </SignUpWrapper>
  );
};

export default SignUp;
