import {
  mapState,
  polygonState,
  searchState,
} from "./../../../../commons/Store/index";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/router";
import { MouseEvent } from "react";

interface IuseMoveToPage {
  onClickMoveToPage: <T>(
    url: string
  ) => (e: MouseEvent<T>) => void;
}

export const useMoveToPage = (): IuseMoveToPage => {
  const router = useRouter();
  const setMapInfo = useSetRecoilState(mapState);
  const setPolygonInfo = useSetRecoilState(polygonState);
  const setSearch = useSetRecoilState(searchState);

  const onClickMoveToPage =
    <T>(url: string) => (e: MouseEvent<T>) => {
      e.stopPropagation()
      void router.push(url);
      setMapInfo({
        isLoaded: false,
        map: null,
        marker: null,
        shop: null,
        codes: [],
      });
      setPolygonInfo({
        code: undefined,
        bounds: null,
      });
      setSearch("");
    };

  return {
    onClickMoveToPage,
  };
};
