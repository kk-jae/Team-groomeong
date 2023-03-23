import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ICreateReviewInput,
  IMutationCreateReviewArgs,
} from "../../../../commons/types/generated/types";
import { schemaReveiw } from "../../validation/createReveiw.validation";
import { UseMutationCreateReview } from "../mutation/UseMutationCreateReview";
import { UseQueryFetchLoginUser } from "../query/UseQueryFetchLoginUser";
import { FETCH_REVIEWS_BY_SHOP_ID } from "../query/UseQueryFetchReviewsByShopId";

export const useCreateReview = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ICreateReviewInput>({
    mode: "onChange",
    resolver: yupResolver(schemaReveiw),
  });
  const [star, setStar] = useState(1);

  const onChangeRating = (star: number): void => {
    setStar(star);
    setValue("star", star);
  };
  const [createReview] = UseMutationCreateReview();
  const { data: loginUser } = UseQueryFetchLoginUser();
  const router = useRouter();
  const onClickCreateReview = async (
    data: ICreateReviewInput
  ): Promise<void> => {
    console.log(data);
    try {
      await createReview({
        variables: {
          createReviewInput: {
            contents: String(data.contents),
            star,
            shopId: String(router.query.shopId),
            userId: String(loginUser?.fetchLoginUser.email),
          },
        },
        refetchQueries: [
          {
            query: FETCH_REVIEWS_BY_SHOP_ID,
            variables: { shopId: String(router.query.shopId) },
          },
        ],
      });
      setStar(1);
      reset();
      Modal.success({ content: "댓작성완료" });
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
      setStar(1);
      reset();
    }
  };
  return {
    onClickCreateReview,
    onChangeRating,
    star,
    register,
    handleSubmit,
    errors,
  };
};
