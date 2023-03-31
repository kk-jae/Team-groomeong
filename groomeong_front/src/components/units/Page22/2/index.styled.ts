import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  height: 2000px;
`;

export const Wrapper = styled.div`
  height: 800px;
  width: 1000vw;
  background: url(https://www.starbucks.co.kr/common/img/main/fav_prod_bg_new.jpg)
    fixed;
`;

export const Img = styled.img`
  position: absolute;
  top: 100px;
  right: 200px;
`;

export const Text = styled.h1`
  font-size: 6em;
  width: 258px;
  color: white;
  font-family: sans-serif;
  position: absolute;
  top: 80px;
  left: 200px;
  font-weight: 700;
  animation: slide 2s ease-out;

  @keyframes slide {
    from {
      left: -100px;
      opacity: 0;
    }
    to {
      left: 200px;
      opacity: 1;
    }
  }

  @keyframes disappear {
    from {
      left: 200px;
      opacity: 1;
    }
    to {
      left: -100px;
      opacity: 0;
    }
  }
`;
