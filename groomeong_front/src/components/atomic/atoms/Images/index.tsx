import * as S from "./index.styles";

export interface ICommonsImagesProps {
  state?: "disabled";
  variation?: "primary" | "secondary";
}

export const CommonsImages = (props: ICommonsImagesProps): JSX.Element => {
  return (
    <S.AddImagesBoxStyles state={props.state} variation={props.variation}>
      <S.AddImagesStyles />
    </S.AddImagesBoxStyles>
  );
};
