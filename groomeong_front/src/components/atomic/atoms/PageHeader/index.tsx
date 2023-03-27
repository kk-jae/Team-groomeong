import {
  PageHeaderContentsWrapper,
  PageHeaderDivider,
  PageHeaderIcon,
  PageHeaderTitle,
  PageHeaderWrapper,
} from "./index.styles";

interface IPageHeader {
  rating?: React.ReactElement;
  icon?: string;
  title: string;
}

const PageHeader = (props: IPageHeader): JSX.Element => {
  return (
    <PageHeaderWrapper>
      <PageHeaderContentsWrapper>
        {props.icon !== undefined ? (
          <PageHeaderIcon icon={props.icon} />
        ) : (
          <></>
        )}
        <PageHeaderTitle>{props.title}</PageHeaderTitle>
        {props.rating}
      </PageHeaderContentsWrapper>
      <PageHeaderDivider />
    </PageHeaderWrapper>
  );
};

export default PageHeader;
