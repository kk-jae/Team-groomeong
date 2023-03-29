import { IShop } from "./../types/generated/types";
import { atom, selector } from "recoil";
import { GetAccessToken } from "../../components/commons/libraries/GetAccessToken";

export interface IMapState {
  map: google.maps.Map | null;
  marker?: google.maps.Marker;
  shop?: IShop;
  code?: number;
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

export const mapState = atom<IMapState>({
  key: "mapState",
  dangerouslyAllowMutability: true,
  default: {
    map: null,
    marker: undefined,
    shop: undefined,
  },
});
