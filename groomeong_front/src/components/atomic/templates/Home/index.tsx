import { SearchBar } from "../../atoms/SearchBar";
import Background from "../../organisms/Background";
import { MainCharacter, MainText } from "./index.style";

export const HomeTemplate = (): JSX.Element => {
  return (
    <>
      <Background>
        <MainText style={{ color: "white", margin: "56px 0px" }}>
          가까운 애견 미용샵, 그루멍에서 검색하세요
        </MainText>
        <SearchBar
          sizes={"large"}
          placeholder={"찾고 싶은 지역을 입력해주세요"}
        ></SearchBar>
        <MainCharacter
          src="/image/img-character-dog.svg"
          style={{ marginTop: "56px" }}
        ></MainCharacter>
      </Background>
    </>
  );
};
