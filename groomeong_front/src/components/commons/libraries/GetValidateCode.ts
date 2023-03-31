import { mapState } from "./../../../commons/Store/index";
import { useRecoilValue } from "recoil";

export const GetValidateCode = (geoCode: string) => {
  const mapInfo = useRecoilValue(mapState);
  return mapInfo?.shop?.code.toString() === geoCode;
};
