import { SearchBar } from "../../atoms/SearchBar";
import Background from "../../organisms/Background";

export const HomeTemplate = (): JSX.Element => {
  return (
    <>
      <Background>
        <h1 style={{ color: "white", margin: "56px 0px" }}>
          가까운 애견 미용샵, 그루멍에서 검색하세요
        </h1>
        <SearchBar
          sizes={"large"}
          placeholder={"찾고 싶은 지역을 입력해주세요"}
        ></SearchBar>
        <img
          src="/image/img-character-dog.svg"
          style={{ marginTop: "56px" }}
        ></img>
      </Background>
    </>
  );
};
