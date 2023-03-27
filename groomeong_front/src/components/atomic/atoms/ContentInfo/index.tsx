import React from "react";
import {
  ContentInfoContent,
  ContentInfoWrapper,
  ContetnInfoLabel,
} from "./index.style";

interface IContentInfoProps {
  label: string;
  content?: string;
  left?: string;
  right?: string;
  bottom?: string;
  top?: string;
  component?: React.ReactElement;
}

const ContentInfo = (props: IContentInfoProps): JSX.Element => {
  return (
    <ContentInfoWrapper
      left={props.left}
      right={props.right}
      bottom={props.bottom}
      top={props.top}
    >
      <ContetnInfoLabel>{props.label}</ContetnInfoLabel>
      <ContentInfoContent>
        {props.component ?? props.content}
      </ContentInfoContent>
    </ContentInfoWrapper>
  );
};

export default ContentInfo;
