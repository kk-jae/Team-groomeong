import { StarRate } from "../StarRate";
import * as S from "./index.style";

export interface ICommentProps {
  contents?: string;
  date?: string;
  name?: string;
  rate?: number;
  iconView: boolean;
  state?: boolean;
}

export const Comment = (props: ICommentProps) => {
  return (
    <>
      <S.TextArea_Wrapper>
        <S.TextArea_TopBox>
          <>
            <S.TextArea_TopBox_Profile>
              {props.iconView ? (
                <S.TextArea_Profile_Icon>
                  <img src={"image/example_dog.png"} alt="" />
                </S.TextArea_Profile_Icon>
              ) : (
                <S.TextArea_Profile_Icon>
                  <img src={"image/icon_dog_profile.png"} alt="" />
                </S.TextArea_Profile_Icon>
              )}
              <span>{props.name}</span>
              <S.TextArea_TopBox_Date>{props.date}</S.TextArea_TopBox_Date>
            </S.TextArea_TopBox_Profile>
            <S.TextArea_TopBox_Rate>
              <StarRate state={props.state} star={props.rate}></StarRate>
            </S.TextArea_TopBox_Rate>
          </>
        </S.TextArea_TopBox>
        <S.TextArea_ContentBox>{props.contents}</S.TextArea_ContentBox>
      </S.TextArea_Wrapper>
    </>
  );
};
