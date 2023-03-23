import React, { useState } from "react";
import { useDogRegister } from "../../../commons/hooks/custom/useDogRegister";
import { SizeBadge } from "../../atoms/Badge/SizeBadge";
import { Buttons } from "../../atoms/Buttons";
import ContentInfo from "../../atoms/ContentInfo";
import { InputMiddle } from "../../atoms/Input/Middle";
import PageHeader from "../../atoms/PageHeader";
import InfoTextArea from "../../atoms/TextArea/InfoTextArea";
import Background from "../Background";
import {
  DogRegisterForm,
  DogRegisterWrapper,
  DogRegisterContentWrapper,
  Div,
  DogRegisterFooterSpan,
} from "./index.style";

const DogRegister = () => {
  const { FormProvider, method, onClickRegisterDog } = useDogRegister();

  return (
    <DogRegisterWrapper>
      <PageHeader title="댕댕이 등록하기" />
      <DogRegisterContentWrapper>
        <FormProvider {...method}>
          <DogRegisterForm onSubmit={method.handleSubmit(onClickRegisterDog)}>
            <InputMiddle
              label="댕댕이 이름"
              name="name"
              placeholder="이름을 입력해주세요."
            />
            <InputMiddle
              label="댕댕이 나이"
              name="age"
              placeholder="나이를 입력해주세요."
              maxLength={2}
              lastText="살"
            />
            <InputMiddle
              label="몸무게"
              name="weight"
              placeholder="몸무게를 입력해주세요."
              maxLength={2}
              lastText="kg"
            />
            <Div>
              <ContentInfo label="종류" badge={<SizeBadge />} />
            </Div>
            <InfoTextArea
              title="특이사항"
              name="significant"
              placeholder="특이사항을 입력해 주세요."
            />
            <DogRegisterWrapper>
              <DogRegisterFooterSpan>
                <Buttons
                  label="댕댕이 저장하기"
                  size="large"
                  variation="primary"
                />
              </DogRegisterFooterSpan>
            </DogRegisterWrapper>
          </DogRegisterForm>
        </FormProvider>
      </DogRegisterContentWrapper>
    </DogRegisterWrapper>
  );
};

export default DogRegister;
