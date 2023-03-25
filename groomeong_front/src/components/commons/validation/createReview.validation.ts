import * as yup from "yup";

export const schemaReview = yup.object({
  contents: yup.string().required("내용을 입력해주세요"),
  star: yup.string().required("별접을 입력해주세요"),
});
