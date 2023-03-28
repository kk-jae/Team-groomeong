import { useFormContext } from "react-hook-form";
import { ChangeEvent, useRef, useState } from "react";
import { UseMutationUploadDogImage } from "../mutation/UseMutationUploadDogImage";

// interface IuseImgInput {
//   uploadDogImage: typeof uploadDogImage;
//   register: UseFormRegister<FieldValues>;
//   ImgInputRef: MutableRefObject<HTMLInputElement | null>;
//   ImgBoxRef: MutableRefObject<HTMLDivElement | null>;
//   img: string;
//   onClickImgInput: () => void;
//   onChangeInput: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
// }

const useImgInput = () => {
  const [img, setImg] = useState<string>("");
  const [uploadDogImage] = UseMutationUploadDogImage();
  const ImgInputRef = useRef<HTMLInputElement | null>(null);
  const ImgBoxRef = useRef<HTMLDivElement | null>(null);
  const { register, setValue } = useFormContext();

  const onClickImgInput = (): void => {
    if (ImgInputRef.current !== null) ImgInputRef.current.click();
  };

  const onChangeInput = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = e.target.files?.[0];
    if (file !== undefined) {
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
