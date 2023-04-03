import { ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import { InputContent, SearchBox, SearchButton } from "./index.styles";

interface ISearchBarProps {
  value: string;
  sizes: "mini" | "small" | "medium" | "large";
  placeholder: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const SearchBar = (props: ISearchBarProps): JSX.Element => {
  return (
    <>
      <SearchBox className="container1" sizes={props.sizes}>
        <InputContent
          value={props.value}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onKeyPress={props.onKeyPress}
        />
        <SearchButton onClick={props.onClick}>
          <span>
            <img src="/image/icon-magnify_white.svg" />
          </span>
        </SearchButton>
      </SearchBox>
    </>
  );
};
