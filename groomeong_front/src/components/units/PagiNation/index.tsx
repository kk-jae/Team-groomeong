import { useEffect, useState } from "react";
import { UseQueryFetchReservationByUser } from "../../commons/hooks/query/UseQueryFetchReservationByUserId";
import { getDate } from "../../commons/libraries/GetDate";
import * as S from "./index.styled";

// 한페이지에 "3개"의 shops를 보여주는 페이지네이션 구현하기
export const PagiNationTemplate = (props) => {
  // const { data } = UseQueryFetchReservationByUser();
  const ArrData = props.data?.fetchReservationsByUser;
  // const { data } = UseQueryFetchShops();
  const [fetchDetail, setFetchDetail] = useState(ArrData?.slice(0, 3));

  let Page: any[] = [];
  if (ArrData) {
    const test = (shops, count: number) => {
      shops = [...ArrData];
      const newArr = [];
      for (let i = 0; i <= shops.length; i += count) {
        if (shops.length >= 0) newArr.push(shops.slice(i, i + count));
      }
      return newArr;
    };
    Page = test(ArrData, 3);
  }

  const onClickPage = (event) => {
    setFetchDetail(Page[Number(event.currentTarget.id)]);
    console.log(fetchDetail);
  };

  return (
    <S.Container>
      <div>
        {fetchDetail
          ? fetchDetail?.map((el, index) => (
              <tbody key={el.id}>
                <tr>
                  <th>{el.shop.name}</th>
                  <th>{getDate(el.date)}</th>
                  <th>{el.time}</th>
                  <th>{el.dog.name}</th>
                </tr>
              </tbody>
            ))
          : ArrData?.slice(0, 3).map((el, index) => (
              <div key={index}>
                <div>{el.dog.name}</div>
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
