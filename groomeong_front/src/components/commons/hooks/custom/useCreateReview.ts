import { yupResolver } from "@hookform/resolvers/yup";
import { Modal } from "antd";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ICreateReviewInput } from "../../../../commons/types/generated/types";
import { schemaReview } from "../../validation/createReview.validation";
import { UseMutationCreateReview } from "../mutation/UseMutationCreateReview";
import { UseQueryFetchShop } from "../query/UseQueryFetchShop";

export const useCreateReview = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ICreateReviewInput>({
    mode: "onChange",
    resolver: yupResolver(schemaReview),
  });
  const [star, setStar] = useState(0);

  const onChangeRating = (star: number): void => {
    setStar(star);
    setValue("star", star);
  };

  const [createReview] = UseMutationCreateReview();
  const { data: reservation } = UseQueryFetchShop();

  const onClickCreateReview =
    (reservationId: string, shopId: string) =>
    async (data: ICreateReviewInput): Promise<void> => {
      console.log(shopId + "/////////////" + reservationId);
      try {
        await createReview({
          variables: {
            createReviewInput: {
              contents: String(data.contents),
              star,
              shopId,
              reservationId,
            },
          },
        });

        Modal.success({ content: "댓작성완료" });
      } catch (error) {
        if (error instanceof Error) Modal.error({ content: error.message });
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
