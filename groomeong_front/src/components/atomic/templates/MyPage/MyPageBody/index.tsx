import ContentInfo from "../../../atoms/ContentInfo";
import * as S from "./index.style";

interface IMyPageBodyProps {
  name: string;
  email: string;
  phone: string;
  image?: string;
}

export const MyPageBody = (props: IMyPageBodyProps): JSX.Element => {
  return (
    <>
      <ContentInfo label={"닉네임"} content={props.name}></ContentInfo>
      <ContentInfo label={"이메일"} content={props.email}></ContentInfo>
      <ContentInfo label={"연락처"} content={props.phone}></ContentInfo>
      <S.ImageWrapper>
        <ContentInfo label={"사진"} content={""}></ContentInfo>
        <img src={props.image ?? "/image/icon-dog.svg"} alt="" />
      </S.ImageWrapper>
    </>
  );
};
