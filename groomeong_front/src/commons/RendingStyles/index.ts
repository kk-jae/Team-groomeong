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
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  /* transform: translateY(
    ${(props) =>
    props.position >= 3720 ? `${9 + (props.position - 3720) / 30}vh` : "8vh"}
  ); */
`;

export const Shop_Img = styled.img<IProps>`
  width: 42%;
  height: auto;
  /* opacity: ${(props) =>
    props.position >= 2300 ? `${(props.position - 2300) / 1000}` : `0`}; */
`;

export const Shop_Text = styled.div<IProps>`
  font-weight: 600;
  font-size: 3vw;
  /* opacity: ${(props) =>
    props.position >= 1200 ? `${(props.position - 1200) / 1000}` : `0`}; */
`;

export const Second = styled.div<IProps>`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: red;
  /* padding-left: 28%; */
  /* transform: translateY(
    ${(props) =>
    props.position >= 4000
      ? `${-159 + (props.position - 4000) / 30}vh`
      : "-160vh"}
  );
  opacity: ${(props) =>
    props.position >= 4000 ? `${(props.position - 4000) / 1000}` : `0`}; */
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
  /* opacity: ${(props) =>
    props.position >= 4000 ? `${(props.position - 4000) / 1000}` : `0`}; */
`;
export const Reservation_Text_Two = styled.div<IProps>`
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
  position: absolute;
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
