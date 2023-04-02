import { IAutocompleteShopsOutput } from "./../types/generated/types";
import { atom, selector } from "recoil";
import { GetAccessToken } from "../../components/commons/libraries/GetAccessToken";
import { RefObject } from "react";
import { Marker } from "@react-google-maps/api";
export interface IPolyInfo {
  code?: number;
  bounds: google.maps.LatLngBounds | null;
}
export interface IMapState {
  isLoaded: boolean,
  map: google.maps.Map | null;
  marker: RefObject<Marker> | null;
  shop?: IAutocompleteShopsOutput | null;
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
    isLoaded: false,
    map: null,
    marker: null,
    shop: null,
    codes: [],
  },
});

export const polygonsState = atom<IPolyInfo[] | []>({
  key: "polygonsState",
  dangerouslyAllowMutability: true,
  default: [],
});

export const polygonState = atom<IPolyInfo>({
  key: "polygonState",
  dangerouslyAllowMutability: true,
  default: {
    code: undefined,
    bounds: null,
  },
});
