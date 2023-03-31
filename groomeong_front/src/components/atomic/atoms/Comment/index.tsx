import { UseQueryFetchForShopDetailPage } from "../../../commons/hooks/query/UseQueryFetchForShopDetailPage";
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
  const { data } = UseQueryFetchForShopDetailPage(String(props.shopId));

  return (
    <>
      <S.TextArea_Wrapper>
        <S.TextArea_TopBox>
          <>
            <S.TextArea_TopBox_Profile>
              {data?.fetchForShopDetailPage.map((el) =>
                el.profile.image != null ? ( // 여기 문제 있는지 볼것// 패치 로그인 유저를 하면 안되고 패치 리뷰 유저가 필요함.
                  <S.TextArea_Profile_Icon key={el.review.id}>
                    <img
                      src={`https://storage.googleapis.com/${el.profile.image}`}
                      alt=""
                    />
                  </S.TextArea_Profile_Icon>
                ) : (
                  <S.TextArea_Profile_Icon key={el.review.id}>
                    <img src={"image/example_dog.png"} alt="" />
                  </S.TextArea_Profile_Icon>
                )
              )}
              {data?.fetchForShopDetailPage.map((el) => (
                <span key={el.review.id}>{el.profile.name} 님</span>
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
