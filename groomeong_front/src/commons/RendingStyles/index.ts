/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled from "@emotion/styled";
import * as GS from "../../../theme/global";
import { mediaQueries } from "../../components/commons/libraries/MediaQueries";

interface IProps {
  position: number;
}

export const Container = styled.div`
  width: 100vw;
  height: 520vh;
  color: black;
  font-family: "Pretendard";
  background-color: white;
  transition: all 0.08s ease-in-out;
  /* cursor: none; */

  ${mediaQueries("phone")} {
    height: 350vh;
  }
  ${mediaQueries("tablet")} {
    height: 350vh;
  }
`;

export const Page = styled.div<IProps>`
  width: 100%;
`;

export const Wrapper = styled.div<IProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const First = styled.div<IProps>`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transform: scale(
      ${(props) => (props.position < 0 ? "1" : `${1 - props.position / 1800}`)}
    )
    rotate(
      ${(props) => (props.position < 0 ? "0" : `${props.position / 50}deg`)}
    );
  opacity: ${(props) =>
    props.position <= 150 ? "1" : `${1 - (props.position - 150) / 1000}`};

  ${mediaQueries("phone")} {
    flex-direction: column;
    height: 80vh;
    transform: none;
    opacity: 1;
  }
  ${mediaQueries("tablet")} {
    height: 80vh;
    flex-direction: column;
    transform: none;
    opacity: 1;
  }
`;

export const First_Text_Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  right: 10vw;
  top: 70vh;
  gap: 1vh;
`;

export const First_sub_Text = styled.div<IProps>`
  font-weight: 600;
  font-size: 1.8vw;
  text-align: end;
  animation-name: firstSubTextDisable, firstSubTextOpacity;
  animation-duration: 2.5s, 2.5s;
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
  width: 40vw;
  height: 60vh;
  top: -19vh;
  left: -39vw;
`;
export const First_Dog_Img = styled.img<IProps>`
  width: 30vw;
  height: 75vh;
  top: -33.5vh;
  left: -32vw;
  position: absolute;
  animation: firstDog 2s ease-in-out;

  @keyframes firstDog {
    0% {
      opacity: 0;
      height: 0vh;
      transform: translateY(80vh);
    }

    70% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      height: 75vh;
      transform: translateY(0);
    }
  }
`;

export const Second = styled.div<IProps>`
  position: relative;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  opacity: ${(props) =>
    props.position >= 1050 ? `${1 + (1050 - props.position) / 2000}` : `1`};

  ${mediaQueries("phone")} {
    opacity: 1;
    height: 80vh;
  }

  ${mediaQueries("tablet")} {
    height: 80vh;
    opacity: 1;
  }
`;

export const Second_Text_Wrapper = styled.div`
  position: absolute;
  top: 17vh;
  left: 4vw;
`;

export const Second_Main_Text = styled.div<IProps>`
  width: 50vw;
  font-size: 4vw;
  font-weight: 800;
  padding-bottom: 5vh;
  opacity: ${(props) =>
    props.position >= 200 ? `${(props.position - 200) / 800}` : `0`};

  ${mediaQueries("phone")} {
    opacity: 1;
    padding-bottom: 2vh;
  }
  ${mediaQueries("tablet")} {
    opacity: 1;
  }
`;
export const Second_Sub_Text = styled.div<IProps>`
  font-size: 1.2vw;
  font-weight: 700;
  opacity: ${(props) =>
    props.position >= 280 ? `${(props.position - 280) / 1000}` : `0`};

  ${mediaQueries("phone")} {
    opacity: 1;
  }
  ${mediaQueries("tablet")} {
    opacity: 1;
  }
`;

export const Second_Img_Wrapper = styled.div<IProps>`
  position: relative;
  opacity: ${(props) =>
    props.position >= 50 ? `${(props.position - 50) / 800}` : `0`};

  ${mediaQueries("phone")} {
    opacity: 1;
  }
  ${mediaQueries("tablet")} {
    opacity: 1;
  }
`;
export const Second_Img_Dog = styled.img<IProps>`
  position: absolute;
  width: 18vw;
  right: -64vw;
  top: 28.5vh;
  z-index: 1;
  transform: translateY(
      ${(props) =>
        props.position <= 800 ? `${(props.position - 800) / 10}vh` : 0}
    )
    rotate(
      ${(props) =>
        props.position <= 800 ? `${-((props.position - 800) / 10)}deg` : 0}
    );

  ${mediaQueries("phone")} {
    transform: none;
    top: 22%;
  }
  ${mediaQueries("tablet")} {
    transform: none;
    top: 22%;
  }
`;
export const Second_Img_Table = styled.img<IProps>`
  position: absolute;
  width: 22vw;
  right: -65vw;
  top: 59.3vh;
  z-index: 1;
  transform: translateY(
      ${(props) =>
        props.position <= 800 ? `${(props.position - 800) / 10}vh` : 0}
    )
    rotate(
      ${(props) =>
        props.position <= 800 ? `${(props.position - 800) / 10}deg` : 0}
    );

  ${mediaQueries("phone")} {
    display: none;
    transform: none;
  }
  ${mediaQueries("tablet")} {
    transform: none;
    display: none;
  }
`;
export const Second_Img_Back = styled.img<IProps>`
  position: absolute;
  width: 50vw;
  right: -83vw;
  top: 20vh;
  z-index: 0;

  ${mediaQueries("phone")} {
    display: none;
  }
  ${mediaQueries("tablet")} {
    display: none;
  }
`;
export const Second_Img_Women = styled.img<IProps>`
  position: absolute;
  width: 23vw;
  right: -89vw;
  top: 13.5vh;
  z-index: 1;
  animation: imgWrapper 1s ease-in-out infinite alternate-reverse;

  @keyframes imgWrapper {
    0% {
      transform: rotate(1deg);
    }

    100% {
      transform: rotate(-1deg);
    }
  }
`;

export const Third = styled.div<IProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries("phone")} {
    height: 80vh;
  }
  ${mediaQueries("tablet")} {
    height: 80vh;
    transform: translateY(-28vh);
  }
`;

export const Third_Img_Wrapper = styled.div<IProps>`
  position: relative;
`;
export const Third_Img_Back = styled.img<IProps>`
  position: absolute;
  width: 100vw;
  height: 270vh;
  top: -90vh;

  ${mediaQueries("phone")} {
    top: -100vh;
    height: 170vh;
  }
  ${mediaQueries("tablet")} {
    top: -100vh;
    height: 170vh;
  }
`;
export const Third_Img_Map = styled.img<IProps>`
  width: 40vw;
  transform: translateX(
    ${(props) =>
      props.position <= 1800 ? `${(props.position - 1800) / 30}vw` : 0}
  );
  ${mediaQueries("phone")} {
    transform: none;
    transform: translateX();
    transform: translateX(-15vh);
  }
  ${mediaQueries("tablet")} {
    transform: none;
    transform: translateX(0);
    transform: translateY(-15vh);
  }
`;

export const Third_Text_Wrapper = styled.div<IProps>`
  width: 100vw;
  margin-right: 10vw;
  padding-bottom: 32vh;
  display: flex;
  flex-direction: column;
  z-index: 555;
  opacity: ${(props) =>
    props.position > 800 ? `${(props.position - 800) / 1000}` : `0`};

  ${mediaQueries("phone")} {
    opacity: 1;
  }

  ${mediaQueries("tablet")} {
    opacity: 1;
  }
`;

export const Third_Main_Text = styled.div<IProps>`
  text-align: end;
  color: white;
  font-size: 4.5vw;
  font-weight: 800;
  padding-bottom: 7vh;

  ${mediaQueries("phone")} {
    padding-bottom: 2vh;
  }

  ${mediaQueries("tablet")} {
    padding-bottom: 2vh;
  }
`;
export const Third_Sub_Text = styled.div<IProps>`
  text-align: end;
  font-size: 1.5vw;
  color: white;
  font-weight: 700;
`;

export const Fourth = styled.div<IProps>`
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  z-index: 2;
  position: relative;

  ${mediaQueries("phone")} {
    height: 0vh;
  }

  ${mediaQueries("tablet")} {
    height: 0vh;
  }
`;

interface IPropsCursor {
  x: number;
  y: number;
}
export const Fourth_Text_Wrapper = styled.div<IProps>`
  width: 100vw;
  position: relative;
  opacity: ${(props) =>
    props.position > 1500 ? `${(props.position - 1500) / 800}` : `0`};

  ${mediaQueries("phone")} {
    opacity: 1;
  }

  ${mediaQueries("tablet")} {
    opacity: 1;
  }
`;
export const Fourth_Main_Text = styled.div<IProps>`
  font-size: 4.5vw;
  position: absolute;
  top: -25vh;
  left: 10vw;
  font-weight: 800;

  ${mediaQueries("phone")} {
    top: -32vh;
  }

  ${mediaQueries("tablet")} {
    top: -32vh;
  }
`;
export const Fourth_Sub_Text = styled.div<IProps>`
  font-size: 1.5vw;
  position: absolute;
  left: 10vw;
  top: -2vh;
  font-weight: 700;

  ${mediaQueries("phone")} {
    top: -25vh;
  }

  ${mediaQueries("tablet")} {
    top: -25vh;
  }
`;

export const Fourth_Img_Wrapper = styled.div<IProps>`
  position: relative;
`;

export const Fourth_Img_Reservation = styled.img<IProps>`
  position: absolute;
  width: 35vw;
  top: -50vh;
  right: -38vw;
  transform: translateY(
    ${(props) =>
      props.position <= 2610 ? `${-((props.position - 2610) / 30)}vw` : 0}
  );
  ${mediaQueries("phone")} {
    transform: none;
  }

  ${mediaQueries("tablet")} {
    transform: none;
  }
`;

export const Fifth = styled.div<IProps>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: ${(props) =>
    props.position >= 2800 ? `${(props.position - 2800) / 400}` : `0`};

  ${mediaQueries("phone")} {
    opacity: 1;
  }

  ${mediaQueries("tablet")} {
    opacity: 1;
  }
`;

export const Fifth_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
  ${mediaQueries("phone")} {
    padding: 0;
  }

  ${mediaQueries("tablet")} {
    padding: 0;
  }
`;

export const Fifth_Img_Wrapper = styled.div``;

export const Fifth_Img = styled.img`
  width: 22vw;
`;
export const Fifth_Text_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Fifth_Main_Text = styled.div`
  font-size: 4.5vw;
  font-weight: 800;
  padding-top: 5vh;
`;
export const Fifth_SubButton_Text = styled.div<IProps>`
  font-size: 1.3vw;
  font-weight: 700;
  padding-top: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    font-weight: 1000;
  }
`;

export const Icon = styled.span`
  color: ${GS.base.primary};
  padding-left: 0.3vw;
  padding-bottom: 0.3vh;
  font-size: 1.5vw;
`;

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
