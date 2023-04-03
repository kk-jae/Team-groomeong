import { useHome } from "../../../commons/hooks/custom/useHome";
import { SearchBar } from "../../atoms/SearchBar";
import Background from "../../organisms/Background";
import { Column } from "./column";
import {
  MainCharacter,
  MainText,
  MainBody,
  MainPopupBox,
  MainPopupBoxWrapper,
  MainPopupBoxContentsWrapper,
} from "./index.style";
import { MainPropupBoxWrapperVariants } from "./index.variants";

export const HomeTemplate = (): JSX.Element => {
  const { onChangeSearch, search, autoShops, List, onClickSearch, onkeyPressSearch } = useHome();
  return (
    <>
      <Background>
        <MainText>가까운 애견 미용샵, 그루멍에서 검색하세요</MainText>
        <MainBody >
          <SearchBar
            value={search}
            onKeyPress={onkeyPressSearch}
            onChange={onChangeSearch}
            onClick={onClickSearch}
            sizes={"large"}
            placeholder={"찾고 싶은 지역을 입력해주세요"}
          />
          {search !== "" ? (
            autoShops?.autocompleteShops != null ? (
              <MainPopupBoxWrapper
                variants={MainPropupBoxWrapperVariants}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
              >
                  <List
                    height={400}
                    itemCount={1}
                    itemSize={4}
                    width={"100%"}
                    itemData={autoShops.autocompleteShops}
                  >
                    {Column}
                  </List>
              </MainPopupBoxWrapper>
            ) : (
              <MainPopupBoxWrapper
                variants={MainPropupBoxWrapperVariants}
                initial={"initial"}
                animate={"animate"}
                exit={"exit"}
              >
                <MainPopupBox>
                  <MainPopupBoxContentsWrapper>
                    찾는내용이 없습니다.
                  </MainPopupBoxContentsWrapper>
                </MainPopupBox>
              </MainPopupBoxWrapper>
            )
          ) : (
            <></>
          )}
        </MainBody>
        <MainCharacter src="/image/img-character-dog.svg"></MainCharacter>
      </Background>
    </>
  );
};
