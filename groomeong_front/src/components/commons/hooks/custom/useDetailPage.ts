import { UseQueryFetchDog } from "./../query/UseQueryFetchDog";
import {
  useForm,
  FormProvider,
  UseFormReturn,
  FieldValues,
  FormProviderProps,
} from "react-hook-form";
import useGetRoute from "./useGetRoute";
import { IDog } from "../../../../commons/types/generated/types";

interface IUseDetailPage {
  method: UseFormReturn<FieldValues, any>;
  FormProvider: <TFieldValues extends FieldValues, TContext = any>(
    props: FormProviderProps<TFieldValues, TContext>
  ) => JSX.Element;
  data?: IDog;
  breed: object;
}

const useDetailPage = (): IUseDetailPage => {
  const method = useForm();
  const { query } = useGetRoute();
  console.log(query);
  const { data } = UseQueryFetchDog(query.dogId as string);
  console.log(data);
  enum breed {
    SMALL = "소형",
    MEDIUM = "중형",
    LARGE = "대형",
    SPECIAL = "특수견",
  }
  return {
    method,
    FormProvider,
    data: data?.fetchDog,
    breed,
  };
};

export default useDetailPage;
