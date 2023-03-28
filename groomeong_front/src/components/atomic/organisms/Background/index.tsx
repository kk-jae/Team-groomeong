import React, { useEffect, useState } from "react";
import { TopBarDefault } from "../../atoms/TopBar/TopBarDefault";
import { BackgroundWrapper } from "./index.style";

interface IBackgroundProps {
  children: React.ReactChild[] | React.ReactChild;
  centered?: boolean;
  viewport?: boolean;
}

const Background = (props: IBackgroundProps): JSX.Element => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.accessToken !== null) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <>
      <BackgroundWrapper centered={props.centered} viewport={props.viewport}>
        <TopBarDefault loggedIn={loggedIn} />
        {props.children}
      </BackgroundWrapper>
    </>
  );
};

export default Background;
