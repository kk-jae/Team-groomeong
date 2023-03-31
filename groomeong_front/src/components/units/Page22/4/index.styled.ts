import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

export const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  height: 2000px;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 105%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f4f4f4;
  position: relative;
  overflow: hidden;
  padding-top: 10px;
  z-index: -1;
`;

export const Background1 = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 76% 0px;
  width: 40%;
  height: 52%;
  position: absolute;
  margin-top: -10px;
`;
export const Background2 = styled.div`
  background-color: rgba(238, 37, 96, 0.2);
  border-radius: 50% 0px 0px 0px;
  width: 37%;
  height: 35%;
  position: absolute;
  right: 0px;
  bottom: 0px;
  margin-top: -10px;
`;

export const TitleWrapper = styled.div`
  padding: 40px;
  position: absolute;
  /* border: 3px solid ${GS.base.primary}; */
  top: 37%;
  left: 15%;
  animation: title 3s ease-in-out;
  z-index: 3;

  @keyframes title {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
export const Text = styled.p`
  font-size: 40px;
  font-weight: 600;
  padding-bottom: 3%;
`;
export const Title = styled.p`
  font-size: 100px;
  font-weight: 700;
  padding-bottom: 30px;
  color: ${GS.base.primary};
  font-family: sans-serif;
`;

export const Title_img = styled.img`
  width: 120px;
  height: 140px;
  object-fit: cover;
  position: absolute;
  top: -8%;
  right: 21%;
`;
export const Bottom = styled.span`
  color: #bfbfbf;
  font-size: 20px;
  font-weight: 500;
`;
export const Scroll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 7%;
  height: 14%;
  background-color: ${GS.base.primary};
  /* width: 124px;
  height: 210px; */
  /* border-radius: 60px 60px 80px 80px; */
  border-radius: 50%;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.5);
  /* border: 2px solid #bfbfbf; */
  position: absolute;
  top: 42%;
  left: 56%;
  animation: scroll 5s ease-in-out;

  @keyframes scroll {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ScrollItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 45px;
  font-size: 19px;
  font-weight: 700;
  color: white;
`;

export const Item1 = styled.span``;
export const Item2 = styled.span`
  padding-top: 10px;
  animation: item 1s ease-in-out infinite alternate-reverse;

  @keyframes item {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(10px);
    }
  }
`;
// export const ScrollItem = styled.div`
//   width: 18px;
//   height: 50px;
//   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
//   border-radius: 30px;
//   top: 18%;
//   right: 41.5%;
//   position: absolute;
//   animation: scrollItem 1.2s ease-in-out infinite 3s alternate-reverse;

//   @keyframes scrollItem {
//     0% {
//       transform: translateY(25px);
//     }
//     100% {
//       transform: translateY(0);
//     }
//   }
// `;

export const ScrollItemText = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
  font-size: 25px;
  font-weight: 600;
  color: #bfbfbf;
  animation: scrollBottom 0.5s ease infinite;

  @keyframes scrollBottom {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(10px);
    }
  }
`;

export const Circle2 = styled.img`
  width: 18%;
  height: 36%;
  border-radius: 50%;
  animation-name: a, b;
  animation-duration: 2.2s, 1.2s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-delay: 0s, 2.2s;
  animation-iteration-count: 1, infinite;
  animation-direction: normal, normal;

  @keyframes a {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes b {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
export const Circle3 = styled.img`
  width: 23%;
  height: 46%;
  border-radius: 50%;
  animation-name: a, b;
  animation-duration: 1.5s, 1.2s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-delay: 0s, 1.5s;
  animation-iteration-count: 1, infinite;
  animation-direction: normal, normal;

  @keyframes a {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes b {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
export const Circle4 = styled.img`
  width: 22%;
  height: 44%;
  border-radius: 50%;
  animation-name: a, b;
  animation-duration: 1.8s, 1.2s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-delay: 0s, 1.8s;
  animation-iteration-count: 1, infinite;
  animation-direction: normal, normal;

  @keyframes a {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes b {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const Circle6 = styled.img`
  width: 30%;
  height: 60%;
  border-radius: 50%;
  animation-name: a, b;
  animation-duration: 2.8s, 1.8s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-delay: 0s, 2.8s;
  animation-iteration-count: 1, infinite;
  animation-direction: normal, normal;

  @keyframes a {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes b {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
export const Circle7 = styled.img`
  width: 10%;
  height: 20%;
  border-radius: 50%;
  animation-name: a, b;
  animation-duration: 3s, 1.2s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-delay: 0s, 3s;
  animation-iteration-count: 1, infinite;
  animation-direction: normal, normal;

  @keyframes a {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes b {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
export const Circle8 = styled.img`
  width: 15%;
  height: 30%;
  border-radius: 50%;
  animation-name: a, b;
  animation-duration: 2.2s, 1.2s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-delay: 0s, 2.2s;
  animation-iteration-count: 1, infinite;
  animation-direction: normal, normal;

  @keyframes a {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes b {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
export const Circle9 = styled.img`
  width: 15%;
  height: 30%;
  border-radius: 50%;
  animation-name: a, b;
  animation-duration: 2s, 1.2s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-delay: 0s, 2s;
  animation-iteration-count: 1, infinite;
  animation-direction: normal, normal;

  @keyframes a {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes b {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
export const Circle10 = styled.img`
  width: 34%;
  height: 68%;
  border-radius: 50%;
  animation-name: a, b;
  animation-duration: 1.8s, 1.2s;
  animation-timing-function: ease-in-out, ease-in-out;
  animation-delay: 0s, 1.8s;
  animation-iteration-count: 1, infinite;
  animation-direction: normal, normal;

  @keyframes a {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes b {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-1deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
