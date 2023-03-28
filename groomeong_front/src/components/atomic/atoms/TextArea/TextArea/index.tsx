import { Buttons } from "../../Buttons";
import { StarRate } from "../../StarRate";
import * as S from "./index.style";
import { useCreateReview } from "../../../../commons/hooks/custom/useCreateReview";
import { withPromiseVoidFunc } from "../../../../../commons/Utils/withFunc";
import { UseQueryFetchLoginUser } from "../../../../commons/hooks/query/UseQueryFetchLoginUser";

interface ITextAreaProps {
  contents?: string;
  date?: string;
  name?: string;
  iconView?: boolean;
  dateView?: boolean;
  buttonView: boolean;
  placeholder?: string;
  commentRating?: number;
  reservationId: string;
  shopId: string;
}

export const TextArea = (props: ITextAreaProps): JSX.Element => {
  const {
    onClickCreateReview,
    onChangeRating,
    handleSubmit,
    register,
    errors,
  } = useCreateReview();

  const { data } = UseQueryFetchLoginUser();

  return (
    <>
      <S.TextArea_Wrapper>
        <form
          style={{
            width: "100%",
          }}
          onSubmit={handleSubmit(
            withPromiseVoidFunc(
              onClickCreateReview(props.reservationId, props.shopId)
            )
          )}
        >
          <S.TextArea_TopBox>
            <>
              <S.TextArea_TopBox_Profile>
                {data?.fetchLoginUser.image != null ? (
                  <S.TextArea_Profile_Icon iconView={props.iconView}>
                    <img
                      src={`https://storage.googleapis.com/${data?.fetchLoginUser.image}`}
                      alt=""
                    />
                  </S.TextArea_Profile_Icon>
                ) : (
                  <S.TextArea_Profile_Icon iconView={props.iconView}>
                    <img src={"/image/icon-dog.svg/"} alt="" />
                  </S.TextArea_Profile_Icon>
                )}
                <span>{data?.fetchLoginUser.name}</span>
                <S.TextArea_TopBox_Date dateView={props.dateView}>
                  {props.date}
                </S.TextArea_TopBox_Date>
              </S.TextArea_TopBox_Profile>

              <S.TextArea_TopBox_Rate>
                <StarRate onChangeRating={onChangeRating}></StarRate>
              </S.TextArea_TopBox_Rate>
            </>
          </S.TextArea_TopBox>
          <S.TextArea_MiddleMainBox_Input>
            <S.Error>{errors.contents?.message}</S.Error>
            <S.TextArea_MiddleBox_Input
              {...register("contents")}
              placeholder={props.placeholder}
            >
              {props.contents}
            </S.TextArea_MiddleBox_Input>
          </S.TextArea_MiddleMainBox_Input>
          {props.buttonView ? (
            <S.TextArea_FooterBox>
              <Buttons
                variation="primary"
                label="댓글 등록"
                border="none"
                size="small"
              ></Buttons>
            </S.TextArea_FooterBox>
          ) : (
            <></>
          )}
        </form>
      </S.TextArea_Wrapper>
    </>
  );
};
