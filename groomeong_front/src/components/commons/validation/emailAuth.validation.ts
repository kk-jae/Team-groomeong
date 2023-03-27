import * as yup from "yup";

// const emailValidation =
//   /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const schemaEmail = yup.object({
  email: yup
    .string()
    .email("이메일 형태로 입력해주세요.")
    .required("이메일을 입력해주세요"),
});
