import { UseMutationUploadDogImage } from "./../mutation/UseMutationUploadDogImage";
import { UseMutationCreateDog } from "./../mutation/UseMutationCreateDog";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "../../../commons/validation/dogRegister.validation";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { FETCH_USER_DOGS } from "../query/UseQueryFetchUserDogs";

export const useDogRegister = () => {
  const [createDog] = UseMutationCreateDog();
  const router = useRouter();

  const [uploadDogImage] = UseMutationUploadDogImage();

  const method = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });

  interface ICreateDogInput {
    name: string;
    age: number;
    weight: number;
    breed: any;
    specifics?: string;
    image?: any;
  }

  const onClickRegisterDog = async (data: ICreateDogInput): Promise<void> => {
    const createDogInput: ICreateDogInput = {
      name: data.name,
      age: Number(data.age),
      weight: Number(data.weight),
      breed: data.breed,
      specifics: data.specifics ?? "",
      image: data?.image?.uploadDogImage?.[0],
      // image: (data?.image?.uploadDogImage[0] as string) ?? null,
    };
    if (createDogInput.breed === undefined) createDogInput.breed = "LARGE";
    // if (createDogInput?.image === undefined) createDogInput.image = undefined;
    try {
      await createDog({
        variables: {
          createDogInput,
        },
        refetchQueries: [
          {
            query: FETCH_USER_DOGS,
          },
        ],
      });
      Modal.success({
        content: "댕댕이가 등록되었습니다",
      });
      void router.push("/mypage");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  return {
    FormProvider,
    method,
    onClickRegisterDog,
    uploadDogImage,
  };
};
