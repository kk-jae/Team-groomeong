import { UseMutationCreateDog } from "./../mutation/UseMutationCreateDog";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "../../../commons/validation/dogRegister.validation";

export const useDogRegister = () => {
  const [createDog] = UseMutationCreateDog();

  const method = useForm({
    mode: "onChange",
    // resolver: yupResolver(Schema),
  });

  const onClickRegisterDog = (data) => {
    if (data.breed === undefined) {
      method.setValue("breed", "BIG");
    }
    console.log(data);
    // console.log(data.breed);

    // const result = createDog({
    //   variables: {
    //     createDogInput: {
    //       name: "이름",
    //       age: 10,
    //       weight: 2,
    //       breed: data.breed,
    //     },
    //   },
    // });
  };

  return {
    FormProvider,
    method,
    onClickRegisterDog,
  };
};
