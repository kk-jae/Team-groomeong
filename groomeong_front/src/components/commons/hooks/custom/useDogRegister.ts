import React from "react";
import { useForm, FormProvider } from "react-hook-form";

export const useDogRegister = () => {
  const method = useForm({
    mode: "onChange",
  });

  return {
    FormProvider,
    method,
  };
};
