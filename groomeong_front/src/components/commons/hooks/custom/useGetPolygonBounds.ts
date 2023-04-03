import { filter } from "lodash";
import { polygonsState } from "../../../../commons/Store/index";
import { useRecoilValue } from "recoil";

export const getPolygonBounds = (codes: number[]) => {
  const polygonInfos = useRecoilValue(polygonsState);
  const filteredBounds = filter(polygonInfos, (polygon, idx) => {
    return codes.map(code => polygon.code === code).flat()
  });
  return filteredBounds;
};
