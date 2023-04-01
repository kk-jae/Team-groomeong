import { searchState } from "./../../../../commons/Store/index";
import { ChangeEvent, useCallback, useState } from "react";
import { debounce } from "lodash";
import { useSetRecoilState } from "recoil";

export const useDebounceOnchage = () => {
  const setSearchState = useSetRecoilState(searchState);
  const [search, setSearch] = useState<string>("");

  const debounceFunc = useCallback(
    debounce((search: string) => {
      setSearchState(search);
    }, 500),
    []
  );

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    debounceFunc(e.target.value);
  };

  return {
    onChangeSearch,
    search,
  };
};
