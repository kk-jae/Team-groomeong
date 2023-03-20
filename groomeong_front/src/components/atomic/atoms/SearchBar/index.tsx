import { InputContent, SearchBox, SearchButton } from "./index.styles";

interface ISearchBarProps {
  size: "small" | "medium" | "large";
  placeholder: string;
}

export const SearchBar = (props: ISearchBarProps) => {
  return (
    <>
      <SearchBox size={props.size}>
        <InputContent
          size={props.size}
          placeholder={props.placeholder}
        ></InputContent>
        <SearchButton>
          <span>
            <img src="/image/icon-magnify_white.svg" />
          </span>
        </SearchButton>
      </SearchBox>
    </>
  );
};
