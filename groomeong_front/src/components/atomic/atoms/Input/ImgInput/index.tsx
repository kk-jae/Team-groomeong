import React from "react";
import { withPromiseVoidFunc } from "../../../../../commons/Utils/withFunc";
import useImgInput from "../../../../commons/hooks/custom/useImgInput";
import { UseQueryFetchLoginUser } from "../../../../commons/hooks/query/UseQueryFetchLoginUser";
import { ImgDiv, ImgInputWrapper, Input } from "./index.styled";

interface IImgInputProps {
  name: string;
  mutationFunc: any;
  shopId?: string;
  state: boolean;
}

const ImgInput = (props: IImgInputProps): JSX.Element => {
  const {
    ImgInputRef,
    ImgBoxRef,
    img,
    setImg,
    register,
    onClickImgInput,
    onChangeInput,
  } = useImgInput();
  const { data } = UseQueryFetchLoginUser();

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
      {props.state ? (
        <ImgDiv
          url={
            img
              ? img
              : `https://storage.googleapis.com/${data?.fetchLoginUser.image}`
          }
          ref={ImgBoxRef}
          onClick={onClickImgInput}
        />
      ) : (
        <ImgDiv url={img} ref={ImgBoxRef} onClick={onClickImgInput} />
      )}
      {/* <ImgDiv url={img} ref={ImgBoxRef} onClick={onClickImgInput} /> */}
    </ImgInputWrapper>
  );
};

export default ImgInput;
