import React from "react";
import Background from "../../organisms/Background";
import DogDetail from "../../organisms/DogDetail";

const DogDetailTemplate = (): JSX.Element => {
  return (
    <Background>
      <DogDetail />
    </Background>
  );
};

export default DogDetailTemplate;
