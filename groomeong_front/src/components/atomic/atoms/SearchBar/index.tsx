import { InputContent, SearchBox, SearchButton } from "./index.styles";
import SearchIcon from "@mui/icons-material/Search";

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
            <SearchIcon></SearchIcon>
          </span>
        </SearchButton>
      </SearchBox>
    </>
  );
};
