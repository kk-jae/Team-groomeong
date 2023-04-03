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
  color: white;
  font-family: "Pretendard";
  cursor: none;
  transition: all 0.08s ease-in-out;
`;

export const Page1 = styled.div<IProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
  transform: scale(
    ${(props) => (props.position ? `${1 + props.position / 5000}` : 1)}
  );
  display: ${(props) => (props.position >= 960 ? "none" : "flex")};
  border-radius: ${(props) => `${props.position / 30}%`};
`;

export const Img1 = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  animation: backTextImg 2.5s ease;
  transform: scale(0.75);

  @keyframes backTextImg {
    0% {
      transform: scale(8);
    }

    100% {
      transform: scale(0.75);
    }
  }
`;
export const Img2 = styled.img`
  position: absolute;
  top: 11%;
  right: 0.5%;
  width: 38%;
  height: 38%;
  animation-name: dog, dog1, dog2;
  animation-duration: 2.6s, 1s, 2s;
  animation-timing-function: ease, ease-in-out, ease-in-out;
  animation-delay: 0s, 2.5s, 6s;
  animation-iteration-count: 1, 1, infinite;
  animation-direction: normal, normal, alternate-reverse;

  @keyframes dog {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes dog1 {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes dog2 {
    0% {
      transform: rotate(3deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
`;

export const FlyAway1 = styled.img`
  position: absolute;
  width: 13.5%;
  height: 27%;
  top: 3%;
  left: 23%;
  transform: translate(0px, 0px) rotate(15deg);
  animation: fly1 5.9s ease-in-out;

  @keyframes fly1 {
    0% {
      transform: translate(-6000px, -11000px) rotate(0deg);
    }

    100% {
      transform: translate(0px, 0px) rotate(15deg);
    }
  }
`;

export const FlyAway2 = styled.img`
  position: absolute;
  width: 13.5%;
  height: 27%;
  top: 9%;
  right: 5%;
  transform: rotate(-30deg);
  animation: fly2 4.4s ease-in-out;

  @keyframes fly2 {
    0% {
      transform: translate(7000px, -21000px) rotate(0deg);
    }

    100% {
      transform: translate(0, 0) rotate(-30deg);
    }
  }
`;
export const FlyAway3 = styled.img`
  position: absolute;
  width: 13.5%;
  height: 27%;
  bottom: 3%;
  left: 5%;
  transform: rotate(-15deg);
  animation: fly3 4.9s ease-in-out;

  @keyframes fly3 {
    0% {
      transform: translate(-6000px, 13000px) rotate(0deg);
    }

    100% {
      transform: translate(0, 0) rotate(-15deg);
    }
  }
`;

export const FlyAway4 = styled.img<IProps>`
  position: absolute;
  width: 13.5%;
  height: 27%;
  bottom: 4%;
  right: 35%;
  transform: rotate(-10deg);
  animation: fly4 5.5s ease-in-out;

  @keyframes fly4 {
    0% {
      transform: translate(5000px, 12000px) rotate(0deg);
    }

    100% {
      transform: translate(0, 0) rotate(-10deg);
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
  background-color: rgba(244, 244, 244, 0.88);
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

export const Page2 = styled.div<IProps>`
  position: fixed;
  width: 100%;
  /* height: 200vh; */
  background-color: ${GS.base.primary};
  opacity: ${(props) => (props.position ? `${props.position / 1000}` : 0)};
`;

export const Shop = styled.div<IProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${GS.base.primary};
`;

export const Shop_Detail = styled.div<IProps>`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transform: translateY(
    ${(props) =>
      props.position >= 3720 ? `${9 + (props.position - 3720) / 30}vh` : "8vh"}
  );
`;

export const Shop_Img = styled.img<IProps>`
  width: 42%;
  height: auto;
  opacity: ${(props) =>
    props.position >= 2300 ? `${(props.position - 2300) / 1000}` : `0`};
`;

export const Shop_Text = styled.div<IProps>`
  font-weight: 600;
  font-size: 3vw;
  opacity: ${(props) =>
    props.position >= 1200 ? `${(props.position - 1200) / 1000}` : `0`};
`;

export const Reservation_Detail = styled.div<IProps>`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  /* padding-left: 28%; */
  transform: translateY(
    ${(props) =>
      props.position >= 4000
        ? `${-159 + (props.position - 4000) / 30}vh`
        : "-160vh"}
  );
  opacity: ${(props) =>
    props.position >= 4000 ? `${(props.position - 4000) / 1000}` : `0`};
`;

export const Reservation_Text = styled.div`
  font-size: 3vw;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;

export const Reservation_Text_One = styled.div<IProps>`
  opacity: ${(props) =>
    props.position >= 4000 ? `${(props.position - 4000) / 1000}` : `0`};
`;
export const Reservation_Text_Two = styled.div<IProps>`
  opacity: ${(props) =>
    props.position >= 5000 ? `${(props.position - 5000) / 1000}` : `0`};
`;

export const Reservation_Img = styled.img`
  width: 20%;
  height: auto;
  margin-right: 13.5vw;
`;

export const Review_Detail = styled.div<IProps>`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  transform: translateY(
    ${(props) =>
      props.position >= 6800
        ? `${-249 + (props.position - 6800) / 30}vh`
        : "-250vh"}
  );
  opacity: ${(props) =>
    props.position >= 6800 ? `${(props.position - 6800) / 1000}` : `0`};
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

export const Introduce_Detail = styled.div<IProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-260vh);
  font-weight: 500;
  position: relative;
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
  opacity: ${(props) =>
    props.position >= 14000 ? `${(props.position - 14000) / 1000}` : `0`};
`;
export const Logo = styled.span<IProps>`
  font-size: 5vw;
  font-weight: 700;
`;

export const Introduce_Img = styled.img<IProps>`
  width: 5vw;
  position: absolute;
  top: -2.5vh;
  opacity: ${(props) =>
    props.position >= 10500 ? `${(props.position - 10500) / 1000}` : `0`};
`;

export const Introduce_Bottom = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 4vh;
  opacity: ${(props) =>
    props.position >= 15500 ? `${(props.position - 15500) / 1000}` : `0`};
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

export const Bubble = styled.div<IProps>`
  z-index: -1;
  width: 18vw;
  height: 36vh;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -70vh;
  left: 4vw;
  /* transform: translateY(0); */
  transform: translateY(
    ${(props) =>
      props.position >= 2800 ? `${1 + (props.position - 3000) / 20}vh` : "0vh"}
  );
  opacity: ${(props) =>
    props.position >= 1001 ? `${(props.position - 1001) / 1000}` : `0`};
`;
export const Bubble2 = styled.div<IProps>`
  z-index: -1;
  width: 68vw;
  height: 136vh;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -150vh;
  right: -33vw;
  transform: translateY(
    ${(props) =>
      props.position >= 1001 ? `${1 + (props.position - 1001) / 70}vh` : "0vh"}
  );
  opacity: ${(props) =>
    props.position >= 1001 ? `${(props.position - 1001) / 1000}` : `0`};
`;
export const Bubble3 = styled.div<IProps>`
  z-index: -1;
  width: 21vw;
  height: 42vh;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -40vh;
  left: 30vw;
  transform: translateY(
    ${(props) =>
      props.position >= 1001 ? `${1 + (props.position - 1600) / 50}vh` : "0vh"}
  );
  opacity: ${(props) =>
    props.position >= 1001 ? `${(props.position - 1001) / 1000}` : `0`};
`;
export const Bubble4 = styled.div<IProps>`
  z-index: -1;
  width: 16vw;
  height: 32vh;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  bottom: 110vh;
  left: -6vw;
  transform: translateY(
    ${(props) =>
      props.position >= 1001 ? `${1 + (props.position - 1600) / 20}vh` : "0vh"}
  );

  opacity: ${(props) =>
    props.position >= 1001 ? `${(props.position - 1001) / 1000}` : `0`};
`;
export const Bubble5 = styled.div<IProps>`
  z-index: -1;
  width: 50vw;
  height: 100vh;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -510vh;
  right: -8vw;
  opacity: ${(props) =>
    props.position >= 1001 ? `${(props.position - 1001) / 1000}` : `0`};

  transform: translateY(
    ${(props) =>
      props.position >= 1001 ? `${1 + (props.position - 1600) / 30}vh` : "0vh"}
  );
`;

export const Bubble6 = styled.div<IProps>`
  z-index: -1;
  width: 20vw;
  height: 40vh;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -380vh;
  left: 18vw;
  transform: translateY(
    ${(props) =>
      props.position >= 1001 ? `${1 + (props.position - 1600) / 20}vh` : "0vh"}
  );
  opacity: ${(props) =>
    props.position >= 1001 ? `${(props.position - 1001) / 1000}` : `0`};
`;
export const Bubble7 = styled.div<IProps>`
  z-index: -1;
  width: 15vw;
  height: 30vh;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -700vh;
  left: 20vw;
  transform: translateY(
    ${(props) =>
      props.position >= 1001 ? `${1 + (props.position - 1600) / 20}vh` : "0vh"}
  );
  opacity: ${(props) =>
    props.position >= 1001 ? `${(props.position - 1001) / 1000}` : `0`};
`;
export const Bubble8 = styled.div<IProps>`
  z-index: -1;
  width: 10vw;
  height: 20vh;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -500vh;
  right: 20vw;
  transform: translateY(
    ${(props) =>
      props.position >= 1001 ? `${1 + (props.position - 1600) / 40}vh` : "0vh"}
  );
  opacity: ${(props) =>
    props.position >= 1001 ? `${(props.position - 1001) / 1000}` : `0`};
`;
export const Bubble9 = styled.div<IProps>`
  z-index: -1;
  width: 40vw;
  height: 80vh;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -500vh;
  left: -15vw;
  transform: translateY(
    ${(props) =>
      props.position >= 1001 ? `${1 + (props.position - 1600) / 60}vh` : "0vh"}
  );
  opacity: ${(props) =>
    props.position >= 1001 ? `${(props.position - 1001) / 1000}` : `0`};
`;

export const Bubble10 = styled.div<IProps>`
  z-index: -1;
  width: 10vw;
  height: 20vh;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -500vh;
  right: 20vw;
  transform: translateY(
    ${(props) =>
      props.position >= 1001 ? `${1 + (props.position - 1600) / 120}vh` : "0vh"}
  );
  opacity: ${(props) =>
    props.position >= 1001 ? `${(props.position - 1001) / 1000}` : `0`};
`;

export const Bubble11 = styled.div<IProps>`
  z-index: -1;
  width: 30vw;
  height: 60vh;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -650vh;
  left: 20vw;
  transform: translateY(
    ${(props) =>
      props.position >= 1001 ? `${1 + (props.position - 1600) / 80}vh` : "0vh"}
  );
  opacity: ${(props) =>
    props.position >= 1001 ? `${(props.position - 1001) / 1000}` : `0`};
`;
