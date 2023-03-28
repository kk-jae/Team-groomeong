import { atom, selector } from "recoil";
import { GetAccessToken } from "../../components/commons/libraries/GetAccessToken";

interface IMapState {
  map?: google.maps.Map;
  marker?: google.maps.Marker;
  shopId?: string;
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
  default: {
    map: undefined,
    marker: undefined,
    shopId: undefined,
  },
});
