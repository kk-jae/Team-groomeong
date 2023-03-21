import React from "react";
import { TextBadge } from "../../atoms/Badge/TextBadge";
import ContentInfo from "../../atoms/ContentInfo";
import PageHeader from "../../atoms/PageHeader";
import InfoTextArea from "../../atoms/TextArea/InfoTextArea";
import {
  Div,
  DogDetailContentImg,
  DogDetailContentWrapper,
  DogDetailWrapper,
} from "./index.style";

const DogDetail = () => {
  return (
    <DogDetailWrapper>
      <PageHeader title="댕댕이 정보" icon="/images/icon-dog.svg" />
      <DogDetailContentWrapper>
        <Div>
          <ContentInfo content="댕댕이" label="이름" right="64px" />
          <ContentInfo content="3" label="나이" right="64px" />
          <ContentInfo content="8" label="몸무게" right="64px" />
          <ContentInfo
            label="견종"
            badge={<TextBadge state={true} text="소형" />}
          />
        </Div>
        <Div>
          <DogDetailContentImg />
        </Div>
      </DogDetailContentWrapper>
      <Div>
        <InfoTextArea title={"특이사항"} content={"이상없음"} disabled />
      </Div>
    </DogDetailWrapper>
  );
};

export default DogDetail;
