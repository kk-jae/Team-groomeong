import { searchState } from "./../../../../commons/Store/index";
import { ChangeEvent, useMemo, useState } from "react";
import { debounce } from "lodash";
import { useRecoilState } from "recoil";

export const useDebounceOnchage = () => {
  const [ globalSearch, setSearchState ] = useRecoilState(searchState);
  const [search, setSearch] = useState<string>("");

  const debounceFunc = useMemo(
    () => debounce((search: string) => {
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
    globalSearch,
  };
};
