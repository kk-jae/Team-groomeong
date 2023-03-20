import { Button } from "../../ButtonSize/ButtonSmall/Button";
import { StarRate } from "../../StarRate";
import * as S from "./index.style";

interface ITextAreaProps {
  contents?: string;
  date?: string;
  name?: string;
  iconView: boolean;
  dateView?: boolean;
  buttonView: boolean;
  placeholder?: string;
  commentRating?: number;
}

export const TextArea = (props: ITextAreaProps) => {
  return (
    <>
      <S.TextArea_Wrapper>
        <S.TextArea_TopBox>
          <>
            <S.TextArea_TopBox_Profile>
              {props.iconView ? (
                <S.TextArea_Profile_Icon iconView={props.iconView}>
                  <img src={"image/example_dog.png"} alt="" />
                </S.TextArea_Profile_Icon>
              ) : (
                <S.TextArea_Profile_Icon iconView={props.iconView}>
                  <img src={"image/icon_dog_profile.png"} alt="" />
                </S.TextArea_Profile_Icon>
              )}
              <span>{props.name}</span>
              <S.TextArea_TopBox_Date dateView={props.dateView}>
                {props.date}
              </S.TextArea_TopBox_Date>
            </S.TextArea_TopBox_Profile>

            <S.TextArea_TopBox_Rate>
              <StarRate star={props.commentRating}></StarRate>
            </S.TextArea_TopBox_Rate>
          </>
        </S.TextArea_TopBox>
        <S.TextArea_MiddleBox_Input placeholder={props.placeholder}>
          {props.contents}
        </S.TextArea_MiddleBox_Input>
        {props.buttonView ? (
          <S.TextArea_FooterBox>
            <Button variation="tertiary" label={"댓글 등록"}></Button>
          </S.TextArea_FooterBox>
        ) : (
          <></>
        )}
      </S.TextArea_Wrapper>
    </>
  );
};
