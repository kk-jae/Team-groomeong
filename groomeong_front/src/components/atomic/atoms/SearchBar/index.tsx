import { InputContent, SearchBox, SearchButton } from "./index.styles";

interface ISearchBarProps {
  sizes: "mini" | "small" | "medium" | "large";
  placeholder: string;
}

export const SearchBar = (props: ISearchBarProps): JSX.Element => {
  return (
    <>
      <SearchBox className="container1" sizes={props.sizes}>
        <InputContent placeholder={props.placeholder}></InputContent>
        <SearchButton>
          <span>
            <img src="/image/icon-magnify_white.svg" />
          </span>
        </SearchButton>
      </SearchBox>
    </>
  );
};
