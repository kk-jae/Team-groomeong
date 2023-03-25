import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: red;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const PageCount = styled.span`
  display: flex;
  flex-direction: row;
  margin: 20px;
  font-size: 30px;
  cursor: pointer;

  :hover {
    font-weight: 700;
  }
  :focus {
    font-weight: 700;
  }
`;
