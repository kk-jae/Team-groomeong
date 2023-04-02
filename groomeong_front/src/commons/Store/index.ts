import { IAutocompleteShopsOutput } from "./../types/generated/types";
import { atom, selector } from "recoil";
import { GetAccessToken } from "../../components/commons/libraries/GetAccessToken";
import { RefObject } from "react";
import { Marker, Polygon } from "@react-google-maps/api";

export interface IPolyInfo {
  ref: RefObject<Polygon> | null;
  bounds: google.maps.LatLngBounds | null;
  isHover: boolean;
  isActive: boolean;
}

export interface IMapState {
  map: google.maps.Map | null;
  marker: RefObject<Marker> | null;
  shop?: IAutocompleteShopsOutput | null;
  polygon: IPolyInfo;
  codes: number[];
}

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await GetAccessToken();
    return newAccessToken;
  },
});

export const searchState = atom<string>({
  key: "searchState",
  default: "",
});

export const mapState = atom<IMapState>({
  key: "mapState",
  dangerouslyAllowMutability: true,
  default: {
    map: null,
    marker: null,
    shop: null,
    polygon: {
      bounds: null,
      isActive: false,
      isHover: false,
      ref: null,
    },
    codes: [],
  },
});
