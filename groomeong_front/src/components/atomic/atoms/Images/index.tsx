import * as S from "./index.styles";

export interface ICommonsImagesProps {
  state?: "disabled";
  variation?: "primary" | "secondary";
}

export const CommonsImages = (props: ICommonsImagesProps) => {
  return (
    <S.AddImagesBoxStyles state={props.state} variation={props.variation}>
      <S.AddImagesStyles />
    </S.AddImagesBoxStyles>
  );
};
