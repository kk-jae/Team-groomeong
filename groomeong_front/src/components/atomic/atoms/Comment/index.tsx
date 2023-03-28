import { UseQueryFetchReservationByShop } from "../../../commons/hooks/query/UseQueryFetchReservationsByShop";
import { getDate } from "../../../commons/libraries/GetDate";
import { StarRate } from "../StarRate";
import * as S from "./index.style";

export interface ICommentProps {
  contents?: string;
  date?: string;
  name?: string;
  rate?: number;
  iconView: boolean;
  state?: boolean;
  shopId?: string;
}

export const Comment = (props: ICommentProps): JSX.Element => {
  const { data } = UseQueryFetchReservationByShop();

  return (
    <>
      <S.TextArea_Wrapper>
        <S.TextArea_TopBox>
          <>
            <S.TextArea_TopBox_Profile>
              {data?.fetchReservationsByShop.map((el) =>
                el.user.image != null ? ( // 여기 문제 있는지 볼것// 패치 로그인 유저를 하면 안되고 패치 리뷰 유저가 필요함.
                  <S.TextArea_Profile_Icon key={el.id}>
                    <img
                      src={`https://storage.googleapis.com/${el.user.image}`}
                      alt=""
                    />
                  </S.TextArea_Profile_Icon>
                ) : (
                  <S.TextArea_Profile_Icon key={el.id}>
                    <img src={"image/example_dog.png"} alt="" />
                  </S.TextArea_Profile_Icon>
                )
              )}
              {data?.fetchReservationsByShop.map((el) => (
                <span key={el.id}>{el.user.name}</span>
              ))}
              <S.TextArea_TopBox_Date>
                {getDate(String(props.date))}
              </S.TextArea_TopBox_Date>
            </S.TextArea_TopBox_Profile>
            <S.TextArea_TopBox_Rate>
              <StarRate state={props.state} star={props.rate}></StarRate>
            </S.TextArea_TopBox_Rate>
          </>
        </S.TextArea_TopBox>
        <S.TextArea_ContentBox>{props.contents}</S.TextArea_ContentBox>
      </S.TextArea_Wrapper>
    </>
  );
};
