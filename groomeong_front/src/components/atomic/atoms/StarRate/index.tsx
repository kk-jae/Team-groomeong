import { IQuery } from "../../../../commons/types/generated/types";
import * as S from "./index.styles";

interface IStarRateProps {
  state?: boolean;
  star?: number;
  onChangeRating?: (star: number) => void;
  data?: Pick<IQuery, "fetchReview">;
}

export const StarRate = (props: IStarRateProps) => {
  return (
    <>
      <S.Star
        disabled={props.state}
        value={props.star !== 1 ? props.star : 1}
        onChange={props.onChangeRating}
      />
    </>
  );
};
