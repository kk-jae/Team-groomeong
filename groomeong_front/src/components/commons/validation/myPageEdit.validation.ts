import * as yup from "yup";

// const regexPassword =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/;
// const regexSpacing = /^[^\s]+$/;
const regexPhone = /^010([0-9]{3,4})([0-9]{4})/;

export const Schema = yup.object({
  name: yup
    .string()
    .required("닉네임을 입력해 주세요.")
    .max(16, "16자 이하로 작성해주세요.")
    .min(2, "2자 이상 작성해주세요."),
  phone: yup
    .string()
    .required("핸드폰 번호를 입력해주세요.")
    .max(11, "11자이하로 입력해주세요.")
    .matches(regexPhone, "- 없이 010 숫자로 시작하여 핸드폰을 입력해주세요."),
});
