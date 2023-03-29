import React from "react";
import ContentInfo from "../../atoms/ContentInfo";
import ImgInput from "../../atoms/Input/ImgInput";
import { UseMutationUploadShopImages } from "../../../commons/hooks/mutation/UseMutationUploadShopImages";
import { FormProvider, useForm } from "react-hook-form";
import { withPromiseVoidFunc } from "../../../../commons/Utils/withFunc";
import { MainDiv } from ".";
import { UseMutationCreateShopImage } from "../../../commons/hooks/mutation/UseMutationCreateShopImage";

const Image = ({ id }: { id: string }) => {
  const [uploadShopImages] = UseMutationUploadShopImages();
  const [createShopImage] = UseMutationCreateShopImage();
  const uploadMethod = useForm({
    mode: "onChange",
  });
  const onSubmitCreateShopImg = async (data: any) => {
    try {
      await createShopImage({
        variables: {
          imageUrl: data.images,
          isThumbnail: true,
          shopId: id,
        },
      });
    } catch (error) {
      if (error instanceof Error) alert(error);
    }
  };

  return (
    <MainDiv>
      <FormProvider {...uploadMethod}>
        <form
          onSubmit={uploadMethod.handleSubmit(
            withPromiseVoidFunc(onSubmitCreateShopImg)
          )}
        >
          <div>
            <ContentInfo
              label="이미지(가게 등록이후 콘솔에 id 나오는지 확인후 등록)"
              component={
                <ImgInput
                  name="files"
                  shopId={id}
                  mutationFunc={uploadShopImages}
                />
              }
            />
            <button>이미지 등록</button>
          </div>
        </form>
      </FormProvider>
    </MainDiv>
  );
};

export default Image;
