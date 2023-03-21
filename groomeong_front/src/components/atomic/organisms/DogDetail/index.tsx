import React from "react";
import PageHeader from "../../atoms/PageHeader";
import { DogDetailWrapper } from "./index.style";

const DogDetail = () => {
  return (
    <DogDetailWrapper>
      <PageHeader title="댕댕이 정보" icon="/images/icon-dog.svg" />
    </DogDetailWrapper>
  );
};

export default DogDetail;
