import React from "react";
import {
  ContentInfoContent,
  ContentInfoWrapper,
  ContetnInfoLabel,
} from "./index.style";

interface IContentInfoProps {
  label: string;
  content: string;
}

const ContentInfo = (props: IContentInfoProps) => {
  return (
    <ContentInfoWrapper>
      <ContetnInfoLabel>{props.label}</ContetnInfoLabel>
      <ContentInfoContent>{props.content}</ContentInfoContent>
    </ContentInfoWrapper>
  );
};

export default ContentInfo;
