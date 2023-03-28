import styled from "@emotion/styled";
import { backdropClasses } from "@mui/material";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  color: #08182b;
`;

export const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  border-radius: 20px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Top = styled.div`
  font-size: 50px;
  font-weight: 700;
  position: relative;
`;

export const Middle = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Middle_box = styled.div`
  width: 25%;
  height: 80%;
  display: flex;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
`;

export const Box_top = styled.div`
  font-size: 28px;
  font-weight: 700;
`;
export const Box_middle = styled.div``;

export const Box_img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-top: 50px;
`;

export const Box_bottom = styled.div``;
