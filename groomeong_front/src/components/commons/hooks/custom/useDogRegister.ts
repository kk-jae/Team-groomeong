import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "../../../commons/validation/dogRegister.validation";

export const useDogRegister = () => {
  const method = useForm({
    mode: "onChange",
    resolver: yupResolver(Schema),
  });

  return {
    FormProvider,
    method,
  };
};
