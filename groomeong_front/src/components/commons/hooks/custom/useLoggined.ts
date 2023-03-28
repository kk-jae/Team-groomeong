import { accessTokenState } from "./../../../../commons/Store/index";
import { useRecoilValue } from "recoil";

const useLoggined = (): boolean => {
  const accessToken = useRecoilValue(accessTokenState);
  return accessToken !== "";
};

export default useLoggined;
