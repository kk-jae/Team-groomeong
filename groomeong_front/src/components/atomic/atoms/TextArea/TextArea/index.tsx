import { Button } from "../../ButtonSize/ButtonSmall/Button";
import * as S from "./index.style";

interface ITextAreaProps {
  contents?: string;
  date?: string;
  title?: string;
  iconView: boolean;
  dateView: boolean;
  buttonView: boolean;
  placeholder: string;
}

export const TextArea = (props: ITextAreaProps) => {
  return (
    <>
      <S.TextArea_Wrapper>
        <S.TextArea_TopBox>
          {props.dateView ? (
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
                <span>{props.title}</span>
              </S.TextArea_TopBox_Profile>
              <S.TextArea_TopBox_Date>{props.date}</S.TextArea_TopBox_Date>
            </>
          ) : (
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
                <span>{props.title}</span>
              </S.TextArea_TopBox_Profile>
            </>
          )}
        </S.TextArea_TopBox>
        <S.TextArea_MiddleBox_Input placeholder={props.placeholder}>
          {props.contents}
        </S.TextArea_MiddleBox_Input>
        {props.buttonView ? (
          <S.TextArea_FooterBox>
            <Button label={"댓글 등록"}></Button>
          </S.TextArea_FooterBox>
        ) : (
          <></>
        )}
      </S.TextArea_Wrapper>
    </>
  );
};
