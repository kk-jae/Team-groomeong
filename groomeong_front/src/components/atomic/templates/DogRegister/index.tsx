import React from "react";
import Background from "../../organisms/Background";
import DogRegister from "../../organisms/DogRegister";

export const DogRegisterTemplate = (): JSX.Element => {
  return (
    <Background>
      <DogRegister />
    </Background>
  );
};
