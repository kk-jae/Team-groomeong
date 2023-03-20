import React from "react";
import { TopBarDefault } from "../../atoms/TopBar/TopBarDefault";
import { BackgroundWrapper } from "./index.style";

interface IBackgroundProps {
  children: React.ReactChild[] | React.ReactChild;
}

const Background = (props: IBackgroundProps) => {
  return (
    <BackgroundWrapper>
      <TopBarDefault loggedIn={false} />
      {props.children}
    </BackgroundWrapper>
  );
};

export default Background;
