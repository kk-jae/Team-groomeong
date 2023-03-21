import React from "react";
import { TopBarDefault } from "../../atoms/TopBar/TopBarDefault";
import { BackgroundWrapper } from "./index.style";

interface IBackgroundProps {
  children: React.ReactChild[] | React.ReactChild;
  centered?: boolean;
  viewport?: boolean;
}

const Background = (props: IBackgroundProps) => {
  return (
    <>
      <BackgroundWrapper centered={props.centered} viewport={props.viewport}>
        <TopBarDefault loggedIn={false} />
        {props.children}
      </BackgroundWrapper>
    </>
  );
};

export default Background;
