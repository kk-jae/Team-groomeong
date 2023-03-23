import { atom, selector } from "recoil";
import { GetAccessToken } from "../../components/commons/libraries/GetAccessToken";

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
