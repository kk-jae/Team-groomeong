import { FieldValues, useFormContext, UseFormRegister } from "react-hook-form";
import { ChangeEvent, MutableRefObject, useRef, useState } from "react";
import { UseMutationUploadDogImage } from "../mutation/UseMutationUploadDogImage";

const [uploadDogImage] = UseMutationUploadDogImage();
interface IuseImgInput {
  uploadDogImage: typeof uploadDogImage;
  register: UseFormRegister<FieldValues>;
  ImgInputRef: MutableRefObject<HTMLInputElement | null>;
  ImgBoxRef: MutableRefObject<HTMLDivElement | null>;
  img: string;
  onClickImgInput: () => void;
  onChangeInput: (uploadFunc: any, shopId?: string) => (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const useImgInput = (): IuseImgInput => {
  const [img, setImg] = useState<string>("");

  const ImgInputRef = useRef<HTMLInputElement | null>(null);
  const ImgBoxRef = useRef<HTMLDivElement | null>(null);
  const { register, setValue } = useFormContext();

  const onClickImgInput = (): void => {
    if (ImgInputRef.current !== null) ImgInputRef.current.click();
  };

  const onChangeInput = (uploadFunc: any, shopid?: string) => async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0];
    if (file !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerEvent) => {
        setImg(readerEvent.target?.result as string);
      };

      if (shopid !== undefined) {
        const { data } = await uploadFunc({
          variables: {
            file,
            shopid,
          },
        });
        
        setValue("image", data?.uploadDogImage[0]);
      } else {
        const { data } = await uploadFunc({
          variables: {
            file,
          },
        });

        setValue("image", data?.uploadDogImage[0]);
      }

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
