import styled from "@emotion/styled";
import * as GS from "../../../../theme/global";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${GS.base.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 82%;
  height: 80%;
  position: relative;

  div {
    display: flex;
    width: 500px;
    height: 300px;
    background-color: black;
    position: absolute;
    opacity: 1;
    cursor: pointer;

    ::before {
      content: "kk-jae 앞면입니다.";
      color: white;
    }
  }

  span {
    display: flex;
    width: 500px;
    height: 300px;
    background-color: pink;
    position: absolute;
    opacity: 0;
    cursor: pointer;

    ::before {
      content: "kk-jae 뒷면입니다";
    }
  }
`;
