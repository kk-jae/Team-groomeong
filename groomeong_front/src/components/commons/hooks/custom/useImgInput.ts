import { useFormContext } from "react-hook-form";
import { ChangeEvent, useRef, useState } from "react";
import { UseMutationUploadDogImage } from "../mutation/UseMutationUploadDogImage";

const useImgInput = () => {
  const [img, setImg] = useState<string>("");
  const [uploadDogImage] = UseMutationUploadDogImage();
  const ImgInputRef = useRef<HTMLInputElement | null>(null);
  const ImgBoxRef = useRef<HTMLDivElement | null>(null);
  const { register, setValue } = useFormContext();

  const onClickImgInput = () => {
    if (ImgInputRef.current !== null) ImgInputRef.current.click();
  };

  const onChangeInput = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerEvent) => {
        setImg(readerEvent.target?.result as string);
      };
      const { data } = await uploadDogImage({
        variables: {
          file,
        },
      });

      setValue("image", data?.uploadDogImage[0]);
    }
  };

  return {
    uploadDogImage,
    register,
    ImgInputRef,
    ImgBoxRef,
    img,
    onClickImgInput,
    onChangeInput,
  };
};

export default useImgInput;
