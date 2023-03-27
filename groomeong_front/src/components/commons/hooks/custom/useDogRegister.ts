import { UseMutationCreateDog } from "./../mutation/UseMutationCreateDog";
import {
  useForm,
  FormProvider,
  FieldValues,
  FormProviderProps,
  UseFormReturn,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "../../../commons/validation/dogRegister.validation";
import { Modal } from "antd";
import { useRouter } from "next/router";

interface ICreateDogInput {
  name: string;
  age: number;
  weight: number;
  breed: any;
  specifics?: string;
  image?: string;
}

interface IUseDogRegister {
  FormProvider: <TFieldValues extends FieldValues, TContext = any>(
    props: FormProviderProps<TFieldValues, TContext>
  ) => JSX.Element;
  method: UseFormReturn<FieldValues, any>;
  onClickRegisterDog: (data: ICreateDogInput) => Promise<void>;
}

export const useDogRegister = (): IUseDogRegister => {
  const [createDog] = UseMutationCreateDog();
  const router = useRouter();

  const method = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });

  const onClickRegisterDog = async (data: ICreateDogInput): Promise<void> => {
    console.log(data.image);
    const createDogInput: ICreateDogInput = {
      name: data.name,
      age: Number(data.age),
      weight: Number(data.weight),
      breed: data.breed,
      specifics: data.specifics ?? "",
      image: data.image,
    };

    if (!(createDogInput.breed === "")) createDogInput.breed = "LARGE";
    try {
      await createDog({
        variables: {
          createDogInput,
        },
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
  };
};
