import { UseQueryFetchDog } from './../query/UseQueryFetchDog';
import { useForm, FormProvider } from "react-hook-form";

const useDetailPage = () => {
  const method = useForm()
  const { data } = UseQueryFetchDog()
  return {
    method,
    FormProvider,
  }
}

export default useDetailPage