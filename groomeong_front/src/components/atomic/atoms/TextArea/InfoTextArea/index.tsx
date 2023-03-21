import React from "react";
import { Buttons } from "../../Buttons";
import {
  Div,
  InfoTextAreaWrapper,
  InfoTextAreaHeader,
  InfoTextAreaLabel,
  InfoTextAreaContents,
  InfoTextAreaFooter,
} from "./index.style";

interface IInfoTextAreaProps {
  title: string;
  content: string;
  disabled?: boolean;
}

const InfoTextArea = (props: IInfoTextAreaProps) => {
  return (
    <InfoTextAreaWrapper>
      <InfoTextAreaHeader>
        <InfoTextAreaLabel>{props.title}</InfoTextAreaLabel>
      </InfoTextAreaHeader>
      <InfoTextAreaContents disabled={props.disabled}>
        {props.content}
      </InfoTextAreaContents>
      <InfoTextAreaFooter>
        <Div>
          <Buttons
            border="border"
            label={"뒤로가기"}
            variation="primary"
            size="medium"
          />
        </Div>
        <Div left="32px">
          <Buttons label={"댕댕이 프로필 삭제하기"} size="medium" />
        </Div>
      </InfoTextAreaFooter>
    </InfoTextAreaWrapper>
  );
};

export default InfoTextArea;
