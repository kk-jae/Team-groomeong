import {
  IMutation,
  IQuery,
  IQueryFetchDogArgs,
} from "./../../../../commons/types/generated/types";
import { UseQueryFetchDog } from "./../query/UseQueryFetchDog";
import { useForm, FormProvider } from "react-hook-form";
import useGetRoute from "./useGetRoute";

const useDetailPage = () => {
  const method = useForm();
  const { query } = useGetRoute();
  const { data } = UseQueryFetchDog(query.dogId as string);
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
