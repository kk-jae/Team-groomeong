import * as yup from "yup";

export const schemaReveiw = yup.object({
  contents: yup.string().required("내용을 입력해주세요"),
});
