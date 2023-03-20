import React from "react";
import {
  PageHeaderContentsWrapper,
  PageHeaderDivider,
  PageHeaderIcon,
  PageHeaderTitle,
  PageHeaderWrapper,
} from "./index.styles";

interface IPageHeader {
  icon: string;
  title: string;
}

const PageHeader = (props: IPageHeader) => {
  return (
    <PageHeaderWrapper>
      <PageHeaderContentsWrapper>
        <PageHeaderIcon icon={props.icon} />
        <PageHeaderTitle>{props.title}</PageHeaderTitle>
      </PageHeaderContentsWrapper>
      <PageHeaderDivider />
    </PageHeaderWrapper>
  );
};

export default PageHeader;
