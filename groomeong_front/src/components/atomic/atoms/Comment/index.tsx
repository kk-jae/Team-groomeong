import { getDate } from "../../../commons/libraries/GetDate";
import { StarRate } from "../StarRate";
import * as S from "./index.style";

export interface ICommentProps {
  contents?: string;
  date?: string;
  name?: string;
  rate?: number;
  iconView: boolean;
  state?: boolean;
  shopId?: string;
  image?: string;
}

export const Comment = (props: ICommentProps): JSX.Element => {
  return (
    <>
      <S.TextArea_Wrapper>
        <S.TextArea_TopBox>
          <>
            <S.TextArea_TopBox_Profile>
              <S.TextArea_Profile_Icon>
                {props.image !== String(null) && props.image !== undefined ? (
                  <img
                    src={`https://storage.googleapis.com/${props.image}`}
                    alt=""
                  />
                ) : (
                  <img src="/image/img-dog-detail.png" alt="" />
                )}
              </S.TextArea_Profile_Icon>
              <span>{props.name} 님</span>
              {/* ))} */}
              <S.TextArea_TopBox_Date>
                {getDate(String(props.date))}
              </S.TextArea_TopBox_Date>
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
