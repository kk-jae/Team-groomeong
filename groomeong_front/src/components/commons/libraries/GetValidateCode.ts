import { mapState } from "./../../../commons/Store/index";
import { useRecoilValue } from "recoil";
import { includes } from "lodash";

export const GetValidateCode = (geoCode: string) => {
  const mapInfo = useRecoilValue(mapState);
  return includes(mapInfo?.codes, Number(geoCode));
};
