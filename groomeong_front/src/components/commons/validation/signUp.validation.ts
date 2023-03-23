import * as yup from "yup";

const regexPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/;
const regexSpacing = /^[^\s]+$/;
const regexPhone = /^010([0-9]{3,4})([0-9]{4})/;

export const Schema = yup.object({
  email: yup
    .string()
    .email("이메일 형태로 입력해주세요.")
    .required("이메일을 입력해 주세요."),
  name: yup
    .string()
    .required("닉네임을 입력해 주세요.")
    .max(16, "16자 이하로 작성해주세요.")
    .min(2, "2자 이상 작성해주세요."),
  password: yup
    .string()
    .required("패스워드를 입력해주어야 합니다.")
    .max(12, "12자이하로 입력해주세요.")
    .min(6, "6자 이상 입력해주세요.")
    .matches(
      regexPassword,
      "영문(대소문자), 숫자, 기호가 최소 1글자가 입력되어야 합니다."
    )
    .matches(regexSpacing, "띄어쓰기가 입력되었습니다."),
  checkPassword: yup
    .string()
    .required("패스워드를 입력해주어야 합니다.")
    .oneOf([yup.ref("password")], "패스워가 일치하지 않습니다.")
    .max(12, "12자이하로 입력해주세요.")
    .min(6, "6자 이상 입력해주세요."),
  phone: yup
    .string()
    .required("핸드폰 번호를 입력해주세요.")
    .max(11, "11자이하로 입력해주세요.")
    .matches(regexPhone, "- 없이 핸드폰번호를 입력해주세요."),
});
