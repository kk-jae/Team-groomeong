import styled from "@emotion/styled";
import * as GS from "../../../theme/global";

interface IProps {
  position: number;
}

export const Container = styled.div`
  height: 11000px;
  overflow: hidden;
  color: white;
  /* transition: all 0.1s ease-in-out; */
  cursor: none;
  font-family: "RendingFont";

  @font-face {
    font-family: "rendingFont";
    src: url("/font/Danjunghae.ttf");
  }
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
    background-color: rgba(0, 0, 0, 0.1);
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
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  display: ${(props) => (props.position >= 3000 ? "none" : "flex")};
  background-color: ${GS.base.primary};

  ::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
  }
`;

export const Shop_Detail = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

  ::before {
    content: "";
    display: block;
    width: 22%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    border-radius: 1%;
  }
`;

export const Shop_Img = styled.img`
  width: 22%;
  height: auto;
  border-radius: 1%;
`;
export const Shop_Text = styled.div`
  font-size: 35px;
  font-weight: 400;
  position: absolute;
`;

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

  ::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
  }
`;

export const Reservation_Detail = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

  ::before {
    content: "";
    display: block;
    width: 20%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    border-radius: 1%;
  }
`;

export const Reservation_Text = styled.div`
  font-size: 30px;
  font-weight: 400;
  position: absolute;
`;

export const Reservation_Img = styled.img`
  width: 20%;
  height: auto;
  border-radius: 1%;
`;

export const Review = styled.div<IProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  display: ${(props) => (props.position >= 7200 ? "none" : "flex")};

  ::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
  }
`;
export const Review_Detail = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

  ::before {
    content: "";
    display: block;
    width: 11.5%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    border-radius: 1%;
  }
`;

export const Review_Img = styled.img`
  width: 11.5%;
  height: auto;
  border-radius: 1%;
`;

export const Review_Text = styled.div`
  font-size: 20px;
  font-weight: 400;
  position: absolute;
`;

export const Introduce = styled.div<IProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  ::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    z-index: -1;
  }
`;

export const Introduce_Text = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
export const Introduce_subTitle = styled.div<IProps>`
  font-size: 50px;
`;
export const Introduce_Title = styled.div<IProps>`
  font-size: 95px;
  opacity: ${(props) =>
    props.position ? `${(props.position - 8500) / 800}` : 0};
  position: relative;
`;

export const Introduce_Img = styled.img`
  width: 600%;
  height: 18%;
`;

export const Logo = styled.span`
  font-weight: 500;
  font-size: 120px;
  cursor: pointer;

  :hover {
    font-weight: 700;
  }
`;
export const Button = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  right: 32%;
  top: -20%;
  transform: rotate(20deg);
  animation: click 0.8s ease-in-out infinite alternate-reverse;

  @keyframes click {
    0% {
      transform: rotate(10deg) translateY(0);
    }

    100% {
      transform: rotate(10deg) translateY(3px);
    }
  }
`;
