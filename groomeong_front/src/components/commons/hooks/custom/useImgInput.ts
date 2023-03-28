import { useFormContext } from "react-hook-form";
import { ChangeEvent, useRef, useState } from "react";

const useImgInput = () => {
  const [img, setImg] = useState<string>("");
  const ImgInputRef = useRef<HTMLInputElement | null>(null);
  const ImgBoxRef = useRef<HTMLDivElement | null>(null);
  const { register, setValue } = useFormContext();

  const onClickImgInput = (): void => {
    if (ImgInputRef.current !== null) ImgInputRef.current.click();
  };

  const onChangeInput =
    (uploadFunc: any, shopId?: string) =>
    async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
      const file = e.target.files?.[0];
      if (file !== undefined) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (readerEvent) => {
          setImg(readerEvent.target?.result as string);
        };

        if (shopId !== "") {
          console.log("되었나?");
          const { data } = await uploadFunc({
            variables: {
              files: [file],
              shopId,
            },
          });
          console.log(data);
          console.log(data?.uploadShopImages[0]);
          setValue("images", data?.uploadShopImages[0]);
        } else {
          const { data } = await uploadFunc({
            variables: {
              files: file,
            },
          });
          setValue("images", data?.uploadDogImage[0]);
        }
      }
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
