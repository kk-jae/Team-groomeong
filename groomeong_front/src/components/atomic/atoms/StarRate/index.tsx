import * as S from "./index.styles";

interface IStarRateProps {
  state?: boolean;
  star?: number;
}
export const StarRate = (props: IStarRateProps) => {
  return (
    <>
      <S.Star disabled={props.state} value={props.star} />
    </>
  );
};
