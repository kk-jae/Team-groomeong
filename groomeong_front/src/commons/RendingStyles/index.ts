/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled from "@emotion/styled";
import * as GS from "../../../theme/global";

interface IProps {
  position: number;
}

export const Container = styled.div`
  width: 100vw;
  height: 2300vh;
  overflow: hidden;
  color: black;
  font-family: "Pretendard";
  background-color: white;
  transition: all 0.08s ease-in-out;
  /* cursor: none; */
`;

export const Page = styled.div<IProps>`
  width: 100%;
  /* height: 200vh; */
  /* background-color: ${GS.base.primary}; */
  /* opacity: ${(props) =>
    props.position ? `${props.position / 1000}` : 0}; */
`;

export const Wrapper = styled.div<IProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const First = styled.div<IProps>`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transform: scale(
      ${(props) =>
        props.position < 150 ? "1" : `${1 - (props.position - 150) / 1800}`}
    )
    rotate(
      ${(props) =>
        props.position < 150 ? "0" : `${(props.position - 150) / 50}deg`}
    );
  opacity: ${(props) =>
    props.position <= 150 ? "1" : `${1 - (props.position - 150) / 1000}`};

  /* transform: translateY(
    ${(props) =>
    props.position >= 3720 ? `${9 + (props.position - 3720) / 30}vh` : "8vh"}
  ); */
`;
export const First_Text_Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  right: 7vw;
  bottom: 12vh;
  gap: 1vh;
`;

export const First_sub_Text = styled.div<IProps>`
  font-weight: 600;
  font-size: 1.8vw;
  text-align: end;
  animation-name: firstSubTextDisable, firstSubTextOpacity;
  animation-duration: 2.5s, 3s;
  animation-timing-function: ease, ease-in-out;
  animation-delay: 0s, 2.5s;

  @keyframes firstSubTextDisable {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes firstSubTextOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const First_Text = styled.div`
  font-size: 5.8vw;
  font-weight: 800;
  animation-name: firstTextDisable, firstTextOpacity;
  animation-duration: 4.5s, 2s;
  animation-timing-function: ease, ease-in-out;
  animation-delay: 0s, 4.5s;

  @keyframes firstTextDisable {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes firstTextOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const First_Img_Wrapper = styled.div`
  position: relative;
  animation: imgWrapper 2s ease-in-out infinite alternate-reverse;

  @keyframes imgWrapper {
    0% {
      transform: rotate(1deg);
    }

    100% {
      transform: rotate(-1deg);
    }
  }
`;
export const First_Back_Img = styled.img<IProps>`
  position: absolute;
  width: 48vw;
  height: 60vh;
  bottom: -43vh;
  left: -40vw;
  /* opacity: ${(props) =>
    props.position >= 2300 ? `${(props.position - 2300) / 1000}` : `0`}; */
`;
export const First_Dog_Img = styled.img<IProps>`
  width: 36.2vw;
  height: 77vh;
  bottom: -43.7vh;
  left: -32vw;
  position: absolute;
  animation: firstDog 2s ease-in-out;

  @keyframes firstDog {
    0% {
      opacity: 0;
      height: 8vh;
      transform: translateY(-5vh);
    }

    60% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      height: 77vh;
      transform: translateY(0);
    }
  }
`;

export const Second = styled.div<IProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: red;
  /* transform: translateY(
    ${(props) =>
    props.position >= 4000
      ? `${-159 + (props.position - 4000) / 30}vh`
      : "-160vh"}
  );
  opacity: ${(props) =>
    props.position >= 4000 ? `${(props.position - 4000) / 1000}` : `0`}; */
`;

export const Second_Text_Wrapper = styled.div`
  font-size: 3vw;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

export const Second_Main_Text = styled.div<IProps>`
  /* opacity: ${(props) =>
    props.position >= 4000 ? `${(props.position - 4000) / 1000}` : `0`}; */
`;
export const Secont_Sub_Text = styled.div<IProps>`
  /* opacity: ${(props) =>
    props.position >= 5000 ? `${(props.position - 5000) / 1000}` : `0`}; */
`;

export const Reservation_Img = styled.img`
  width: 20%;
  height: auto;
  margin-right: 13.5vw;
`;

export const Third = styled.div<IProps>`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: blue;
  /* transform: translateY(
    ${(props) =>
    props.position >= 6800
      ? `${-249 + (props.position - 6800) / 30}vh`
      : "-250vh"}
  );
  opacity: ${(props) =>
    props.position >= 6800 ? `${(props.position - 6800) / 1000}` : `0`}; */
`;

export const Review_Img = styled.img`
  width: 35%;
  height: auto;
  margin-left: 4vw;
`;

export const Review_Text = styled.div`
  font-size: 3vw;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

export const Review_Text_One = styled.div<IProps>`
  opacity: ${(props) =>
    props.position >= 8200 ? `${(props.position - 8200) / 1000}` : `0`};
`;
export const Review_Text_Two = styled.div<IProps>`
  opacity: ${(props) =>
    props.position >= 8600 ? `${(props.position - 8600) / 1000}` : `0`};
`;

export const Fourth = styled.div<IProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
export const Introduce_subTitle = styled.div<IProps>`
  font-size: 3vw;
  position: relative;
  /* padding-right: 12vw;
  padding-bottom: 3vh; */
  left: -6.2vw;
  top: -1vh;
`;

export const Introduce_Title = styled.div<IProps>`
  position: relative;
  font-size: 3vw;
  right: -7vw;
  top: 1vh;
  /* opacity: ${(props) =>
    props.position >= 14000 ? `${(props.position - 14000) / 1000}` : `0`}; */
`;
export const Logo = styled.span<IProps>`
  font-size: 5vw;
  font-weight: 700;
`;

export const Introduce_Img = styled.img<IProps>`
  width: 5vw;
  position: absolute;
  top: -2.5vh;
  /* opacity: ${(props) =>
    props.position >= 10500 ? `${(props.position - 10500) / 1000}` : `0`}; */
`;

export const Introduce_Bottom = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 4vh;
  /* opacity: ${(props) =>
    props.position >= 15500 ? `${(props.position - 15500) / 1000}` : `0`}; */
`;

export const LastLogo = styled.img<IProps>`
  width: 20vw;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
export const ClickBtn = styled.img<IProps>`
  width: 4vw;
  transform: rotate(180deg);
  animation: click 1s ease-out infinite;

  @keyframes click {
    0% {
      transform: rotate(180deg) translateY(5px);
    }
    100% {
      transform: rotate(180deg) translateY(-8px);
    }
  }
`;

interface IPropsCursor {
  x: number;
  y: number;
}

export const Scroll = styled.div<IPropsCursor>`
  z-index: 9999;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  color: #454552;
  transform: translate(
    ${(props) => `${props.x}px`},
    ${(props) => `${props.y}px`}
  );
  transition: all 0.08s ease;
  background-color: rgba(232, 90, 113, 0.65);
  font-weight: 700;
  font-size: 14px;
  animation-name: disable, cursor;
  animation-duration: 6s, 0.5s;
  animation-timing-function: ease, ease-in-out;
  animation-delay: 0s, 6s;

  @keyframes disable {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes cursor {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Scroll_Text = styled.div`
  font-weight: 500;
`;
export const Scroll_Icon = styled.div`
  position: absolute;
  top: 72px;
`;
