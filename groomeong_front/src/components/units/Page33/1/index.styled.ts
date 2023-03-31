import styled from "@emotion/styled";
import { positions } from "@mui/system";
import * as GS from "../../../../../theme/global";

interface IProps {
  position: number;
}

export const Container = styled.div`
  height: 2000000px;
  overflow: hidden;
  background-color: #f4f4f4;
  color: white;
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

  ::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 117, 255, 0.1);
  }
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
  animation-name: dog, dog1;
  animation-duration: 2.6s, 1s;
  animation-timing-function: ease, ease-in-out;
  animation-delay: 0s, 2.5s;
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
  transform: rotate(-10deg)
    /* scale(${(props) => (props.position ? 1 + props.position / 100 : 1)}); */;
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

export const Scroll = styled.div`
  position: absolute;
  bottom: 5%;
  right: 3%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  color: BLACK;

  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  background-color: #f4f4f4;
  font-weight: 700;
  font-style: italic;
  animation-name: aaa, bbb, ccc;
  animation-duration: 6s, 2s, 1s;
  animation-timing-function: ease, ease-in-out, ease-in-out;
  animation-delay: 0s, 6s, 6s;
  animation-iteration-count: 1, 1, infinite;
  animation-direction: normal, normal, alternate-reverse;

  @keyframes aaa {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes bbb {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes ccc {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(10px);
    }
  }
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
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  display: ${(props) => (props.position >= 3000 ? "none" : "flex")};
`;

export const Shop_Detail = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 60px 0px 60px;
  /* transition: all 0.1s ease-in-out; */
  transform: scale(
      ${(props) =>
        props.position >= 1000 ? `${1 + (props.position - 1000) / 1200}` : 0}
    )
    translate(
      ${(props) =>
        props.position >= 1000 ? `${(props.position - 2000) / 2}px` : 0},
      ${(props) =>
        props.position >= 1000 ? `${(props.position - 2000) / 2}px` : 0}
    );
  opacity: ${(props) =>
    props.position >= 1000 && props.position <= 1800
      ? `${(props.position - 1000) / 800}`
      : `${1800 / props.position}`};
`;

export const Shop_Img = styled.img`
  width: 30%;
  height: 60%;
`;
export const Shop_Text = styled.div``;

export const Reservation = styled.div<IProps>`
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  display: ${(props) => (props.position >= 4800 ? "none" : "flex")};
`;

export const Reservation_Detail = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 60px 0px 60px;
  /* transition: all 0.1s ease-in-out; */
  transform: scale(
      ${(props) =>
        props.position >= 3000 ? `${1 + (props.position - 3000) / 1000}` : 0}
    )
    translateY(
      ${(props) =>
        props.position >= 3000 ? `${(props.position - 4000) / 2}px` : 0}
    );
  opacity: ${(props) =>
    props.position >= 3000 ? `${(props.position - 3000) / 1000}` : `0`};
`;

export const Reservation_Text = styled.div``;

export const Reservation_Img = styled.img`
  width: 30%;
  height: 60%;
`;

export const Review = styled.div<IProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  display: ${(props) => (props.position >= 7200 ? "none" : "flex")};
`;
export const Review_Detail = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 60px 0px 60px;
  transform: scale(
      ${(props) =>
        props.position >= 4800 ? `${1.0 + (props.position - 4800) / 500}` : 0}
    )
    translateX(
      ${(props) =>
        props.position >= 4800 ? `${(props.position - 6000) / 2}px` : "0px"}
    );
  opacity: ${(props) =>
    props.position >= 4800 && props.position <= 6000
      ? `${(props.position - 4800) / 1000}`
      : `${6000 / props.position}`};
`;

export const Review_Img = styled.img`
  width: 30%;
  height: 60%;
`;

export const Review_Text = styled.div``;

export const Introduce = styled.div<IProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Introduce_Text = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
export const Introduce_subTitle = styled.div<IProps>`
  font-size: 50px;
  opacity: ${(props) =>
    props.position ? `${(props.position - 2000) / 800}` : 0};
`;
export const Introduce_Title = styled.div<IProps>`
  font-size: 100px;
  opacity: ${(props) =>
    props.position ? `${(props.position - 3000) / 800}` : 0};
`;

export const Introduce_Img = styled.img`
  color: white;
  width: 9%;
  height: 18%;
`;
