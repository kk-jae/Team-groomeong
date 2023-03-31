import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

export const Container = styled.div`
  height: 1000vh;
  overflow-x: hidden;
  /* width: ${(props) => (props.aa ? `${props.aa}px` : "0px")}; */
  /* background-color: red; */
  position: relative;

  :before {
    content: " ";
    display: block;
    width: 200px;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Wrapper = styled.img`
  width: 200px;
  height: 200px;
  position: fixed;
  top: 50px;
  /* margin-top: 800px; */
  /* transition: all 0.5s ease; */
  transform: ${(props) =>
    props.aa ? `translateX(${props.aa / 2}px)` : "0px"}; ;
`;
