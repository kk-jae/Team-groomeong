import * as yup from "yup";

export const Schema = yup.object({
  name: yup.string().required("댕댕이 이름을 입력해 주세요."),
  age: yup.string().required("나이를 입력해 주세요."),
  weight: yup.string().required("체중 입력해주어야 합니다."),
  // breed: yup.string().required("종류를 선택해주어야 합니다."),
  significant: yup.string().required("특이사항을 입력해주세요."),
});
