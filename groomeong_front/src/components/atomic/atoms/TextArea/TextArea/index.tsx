/* eslint-disable @next/next/no-img-element */
import { FormProvider, useForm } from "react-hook-form";
import {
  ICreateReviewInput,
  IMutationCreateReviewArgs,
} from "../../../../../commons/types/generated/types";
import { Buttons } from "../../Buttons";
import { StarRate } from "../../StarRate";
import * as S from "./index.style";
import { useCreateReview } from "../../../../commons/hooks/custom/useCreateReview";
import { withPromiseVoidFunc } from "../../../../../commons/Utils/withFunc";
import { useState } from "react";
import { UseQueryFetchShop } from "../../../../commons/hooks/query/UseQueryFetchShop";
import { UseQueryFetchReview } from "../../../../commons/hooks/query/UseQueryFetchReview";

interface ITextAreaProps {
  contents?: string;
  date?: string;
  name?: string;
  iconView?: boolean;
  dateView?: boolean;
  buttonView: boolean;
  placeholder?: string;
  commentRating?: number;
  onClick: (data: ICreateReviewInput) => Promise<void>;
}

export const TextArea = (props: ITextAreaProps) => {
  const {
    onClickCreateReview,
    onChangeRating,
    star,
    handleSubmit,
    register,
    errors,
  } = useCreateReview();

  return (
    <>
      <S.TextArea_Wrapper>
        <form
          style={{
            width: "100%",
          }}
          onSubmit={handleSubmit(withPromiseVoidFunc(onClickCreateReview))}
          // onSubmit={handleSubmit((data) => console.log(data))}
        >
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
                <StarRate
                  onChangeRating={onChangeRating}
                  star={star}
                ></StarRate>
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
