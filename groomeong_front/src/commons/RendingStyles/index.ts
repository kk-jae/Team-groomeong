/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled from "@emotion/styled";
import * as GS from "../../../theme/global";

interface IProps {
  position: number;
}

export const Container = styled.div`
  height: 16000px;
  overflow: hidden;
  color: white;
  cursor: none;
`;

export const Page1 = styled.div<IProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: ${GS.base.primary};
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
  opacity: 1;
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
  height: 100vh;
  background-color: ${GS.base.primary};
  opacity: ${(props) => (props.position ? `${props.position / 1000}` : 0)};
`;

export const Shop = styled.div<IProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${GS.base.primary};
`;

export const Shop_Detail = styled.div<IProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  transform: translateY(
    ${(props) =>
      props.position >= 3720 ? `${props.position / 3.1}px` : "1100px"}
  );
`;

export const Shop_Img = styled.img<IProps>`
  width: 50%;
  height: auto;
  border-radius: 1%;
  position: absolute;
  opacity: ${(props) =>
    props.position >= 2300 ? `${(props.position - 2300) / 1000}` : `0`};
`;

export const Shop_Text = styled.div<IProps>`
  z-index: 5;
  font-weight: 600;
  font-size: 65px;
  color: white;
  transform: translateY(-550%);

  opacity: ${(props) =>
    props.position >= 1200 ? `${(props.position - 1200) / 1000}` : `0`};
`;
export const Bubble = styled.div`
  width: 312px;
  height: 312px;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -1480%;
  left: 5%;
`;

export const Bubble2 = styled.div`
  width: 1114px;
  height: 1114px;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -2400%;
  right: -27%;
`;
export const Bubble3 = styled.div`
  width: 361px;
  height: 361px;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -950%;
  left: 26%;
`;
export const Bubble4 = styled.div`
  width: 262px;
  height: 262px;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  left: -5%;
  bottom: -300%;
`;
export const Bubble5 = styled.div`
  width: 1000px;
  height: 1000px;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -6000%;
  left: 10%;
`;

export const Bubble6 = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #80baff;
  position: absolute;
  top: -7200%;
  right: 30%;
`;

export const Reservation_Detail = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 28%;

  transform: translateY(
    ${(props) =>
      props.position >= 2400 ? `${(props.position - 4000) / 3.5}px` : 0}
  );

  opacity: ${(props) =>
    props.position >= 3720 ? `${(props.position - 3720) / 2000}` : `0`};
`;

export const Reservation_Text = styled.div`
  font-size: 65px;
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
  width: 36%;
  height: auto;
`;

export const Review = styled.div<IProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const Review_Detail = styled.div<IProps>`
  position: relative;
  width: 110%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: ${(props) =>
    props.position >= 6480 ? `${(props.position - 6480) / 2000}` : `0`};
  transform: translateY(
    ${(props) =>
      props.position >= 4920 ? `${(props.position - 9940) / 3.5}px` : 0}
  );
`;

export const Review_Img = styled.img`
  width: 50%;
  height: auto;
  margin-left: -20%;
`;

export const Review_Text = styled.div`
  font-size: 65px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  margin-left: 6%;
`;

export const Review_Text_One = styled.div<IProps>`
  opacity: ${(props) =>
    props.position >= 7300 ? `${(props.position - 7300) / 1000}` : `0`};
`;
export const Review_Text_Two = styled.div<IProps>`
  opacity: ${(props) =>
    props.position >= 8300 ? `${(props.position - 8300) / 1000}` : `0`};
`;

export const Introduce = styled.div<IProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
`;

export const Introduce_Text = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  position: fixed;
  top: 37%;
  left: 30%;
`;
export const Introduce_subTitle = styled.div<IProps>`
  font-size: 65px;
  opacity: ${(props) =>
    props.position >= 11380 ? `${(props.position - 11380) / 2000}` : `0`};
`;

export const Introduce_Title = styled.div<IProps>`
  width: 1000px;
  font-size: 65px;
  position: absolute;
  bottom: -220%;
  left: 45%;
  opacity: ${(props) =>
    props.position >= 12500 ? `${(props.position - 12500) / 2000}` : `0`};
`;

export const Introduce_Img = styled.img`
  width: 600%;
  height: auto;
`;

export const Logo = styled.span`
  font-weight: 500;
  font-size: 120px;
`;

export const LastLogo = styled.img<IProps>`
  position: absolute;
  bottom: -700%;
  right: -20%;
  transition: all 0.3s ease-in-out;
  opacity: ${(props) =>
    props.position >= 12800 ? `${(props.position - 12800) / 2000}` : `0`};
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;
export const ClickBtn = styled.img<IProps>`
  position: absolute;
  transform: rotate(180deg);
  top: 540%;
  left: 75%;
  animation: click 1s ease-out infinite;
  opacity: ${(props) =>
    props.position >= 12800 ? `${(props.position - 12800) / 2000}` : `0`};
  width: 13%;

  @keyframes click {
    0% {
      transform: rotate(180deg) translateY(5px);
    }
    100% {
      transform: rotate(180deg) translateY(-8px);
    }
  }
`;
