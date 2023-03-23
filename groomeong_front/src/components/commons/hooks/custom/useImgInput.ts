import { useFormContext } from "react-hook-form";
import { ChangeEvent, useRef, useState } from "react";

const useImgInput = () => {
  const [img, setImg] = useState<string>("");
  const ImgInputRef = useRef<HTMLInputElement | null>(null);
  const ImgBoxRef = useRef<HTMLDivElement | null>(null);
  const { register, setValue } = useFormContext();

  const onClickImgInput = () => {
    if (ImgInputRef.current !== null) ImgInputRef.current.click();
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerEvent) => {
        setImg(readerEvent.target?.result as string);
      };
    }
    setValue("picture", file);
  };

  return {
    register,
    ImgInputRef,
    ImgBoxRef,
    img,
    onClickImgInput,
    onChangeInput,
  };
};

export default useImgInput;
