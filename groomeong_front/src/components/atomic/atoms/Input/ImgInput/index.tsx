import React from "react";
import { withPromiseVoidFunc } from "../../../../../commons/Utils/withFunc";
import useImgInput from "../../../../commons/hooks/custom/useImgInput";
import { ImgDiv, ImgInputWrapper, Input } from "./index.styled";

interface IImgInputProps {
  name: string;
  mutationFunc: any;
  shopId?: string;
}

const ImgInput = (props: IImgInputProps): JSX.Element => {
  const {
    ImgInputRef,
    ImgBoxRef,
    img,
    register,
    onClickImgInput,
    onChangeInput,
  } = useImgInput();

  const { ref, ...rest } = register(props.name, {
    onChange: withPromiseVoidFunc(
      onChangeInput(props.mutationFunc, props.shopId)
    ),
  });

  return (
    <ImgInputWrapper>
      <Input
        type="file"
        {...rest}
        ref={(e) => {
          ref(e);
          ImgInputRef.current = e;
        }}
      />
      <ImgDiv url={img} ref={ImgBoxRef} onClick={onClickImgInput} />
    </ImgInputWrapper>
  );
};

export default ImgInput;
