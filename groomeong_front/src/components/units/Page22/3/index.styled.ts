import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 2000px;
`;

export const Bgbg1 = styled.div`
  background-color: red;
  width: 1000px;
  height: 800px;
  object-fit: cover;
  background: url("/image/main_search.png");
  background-position-y: ${(props) =>
    props.position ? `${props.position / 2}px` : `0px`};
`;

export const Bgbg1Text = styled.div`
  color: white;
  text-align: center;
  padding: 80px;
`;

export const Desc1 = styled.p`
  font-size: 30px;

  margin: 50px;
  transform: translateX(
    ${(props) => (props.position ? `${props.position / 1.5}px` : `0px`)}
  );
`;
export const Desc2 = styled.p`
  font-size: 30px;

  margin: 50px;
  transform: translateX(
    ${(props) => (props.position ? `${-props.position}px` : `0px`)}
  );
`;

export const Dis = styled.div`
  font-size: 50px;
  margin: 50px;
  opacity: ${(props) =>
    props.position ? `${(props.position - 90) / 500}` : 0};
`;
export const Dis1 = styled.div`
  font-size: 50px;
  margin: 50px;
  opacity: ${(props) =>
    props.position ? `${(props.position - 200) / 500}` : 0};
`;
export const Dis2 = styled.div`
  font-size: 50px;
  margin: 50px;
  opacity: ${(props) =>
    props.position ? `${(props.position - 300) / 500}` : 0};
`;
