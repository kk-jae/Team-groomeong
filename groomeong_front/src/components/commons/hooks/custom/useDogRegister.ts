import { UseMutationCreateDog } from "./../mutation/UseMutationCreateDog";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "../../../commons/validation/dogRegister.validation";
import { Modal } from "antd";
import { useRouter } from "next/router";

export const useDogRegister = () => {
  const [createDog] = UseMutationCreateDog();
  const router = useRouter();

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
    image?: string;
  }

  const onClickRegisterDog = async (data: ICreateDogInput) => {
    const createDogInput: ICreateDogInput = {
      name: data.name,
      age: Number(data.age),
      weight: Number(data.weight),
      breed: data.breed,
      specifics: data.specifics ?? "",
      image: data.image,
    };

    if (!createDogInput.breed) createDogInput.breed = "LARGE";
    try {
      const result = await createDog({
        variables: {
          createDogInput,
        },
      });

      Modal.success({
        content: "댕댕이가 등록되었습니다",
      });
      router.push("/mypage");
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
  };
};
