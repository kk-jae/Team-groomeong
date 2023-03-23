import { useRouter } from "next/router";

const useGetRoute = () => {
  const { push, back, query } = useRouter();
  return {
    push,
    back,
    query,
  };
};

export default useGetRoute;
