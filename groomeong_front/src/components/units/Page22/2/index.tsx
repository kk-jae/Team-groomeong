import * as S from "./index.styled";

export default function Page22() {
  let location;
  if (typeof document !== "undefined") {
    location = document.location;

    let mainText = document.querySelector("h1");

    window.addEventListener("scroll", function () {
      let value = window.scrollY;

      if (value > 200) {
        mainText?.style.animation === "disappear 1s ease-out forwards";
      } else {
        mainText?.style.animation === "slide 1s ease-out forwards";
      }
    });
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Text id="h1" style={{ animation: "none" }}>
          PICK YOUR FAVORITE
        </S.Text>
        <S.Img src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_spring2_pick_img.png" />
      </S.Wrapper>
    </S.Container>
  );
}
