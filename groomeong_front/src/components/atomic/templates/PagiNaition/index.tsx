import { useEffect, useState } from "react";
import { UseQueryFetchShops } from "../../../commons/hooks/query/UseQueryFetchShops";
import * as S from "./index.styled";

// 한페이지에 "3개"의 shops를 보여주는 페이지네이션 구현하기
export const PagiNationTemplate = () => {
  const { data } = UseQueryFetchShops();
  const [fetchDetail, setFetchDetail] = useState(data?.fetchShops.slice(0, 3));

  let Page: any[] = [];
  if (data?.fetchShops) {
    const test = (shops, count: number) => {
      shops = [...data.fetchShops];
      const newArr = [];
      for (let i = 0; i <= shops.length; i += count) {
        if (shops.length >= 0) newArr.push(shops.slice(i, i + count));
      }
      return newArr;
    };
    Page = test(data?.fetchShops, 3);
  }

  const onClickPage = (event) => {
    setFetchDetail(Page[Number(event.currentTarget.id)]);
  };

  return (
    <S.Container>
      <div>
        {fetchDetail?.map((el, index) => (
          <div key={index}>
            <div>{el.name}</div>
          </div>
        ))}
      </div>
      <S.Wrapper>
        {"<"}
        {Page.map((el, index) => (
          <>
            <S.PageCount onClick={onClickPage} id={String(index)} tabIndex={0}>
              {index + 1}
            </S.PageCount>
          </>
        ))}
        {">"}
      </S.Wrapper>
    </S.Container>
  );
};

// if (data?.fetchShops) {
//   const test = (shops, count: number) => {
//     const newArr = [];
//     for (let i = 0; i <= shops.length; i += 1) {
//       if (shops.length >= 0) newArr.push(shops.splice(0, count));
//     }
//     return newArr;
//   };
//   console.log(test([...data?.fetchShops], 2));
// }
