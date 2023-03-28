import * as S from "./index.styled";

// 사용 방법
// <BookingBadge state={true} text="텍스트"/>

interface IProps {
  state: boolean;
  text: string;
}
export const TextBadge = (props: IProps): JSX.Element => {
  return (
    <S.TextBadgeWrapper>
      <S.TextBadgeButton state={props.state}>{props.text}</S.TextBadgeButton>
    </S.TextBadgeWrapper>
  );
};
