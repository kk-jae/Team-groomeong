import * as S from "./index.style";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Buttons } from "../../../atoms/Buttons";
import { useRouter } from "next/router";
import { UseQueryFetchUserDogs } from "../../../../commons/hooks/query/UseQueryFetchUserDogs";
import { MouseEvent } from "react";

interface IDogType {
  SMALL: string;
  MEDIUM: string;
  LARGE: string;
  SPECIAL: string;
}

export const DogsList = (): JSX.Element => {
  const router = useRouter();
  const { data: dogData } = UseQueryFetchUserDogs();

  const dogType: IDogType = {
    SMALL: "소형",
    MEDIUM: "중형",
    LARGE: "대형",
    SPECIAL: "특수견",
  };

  const onClickAddDog = (): void => {
    void router.push("/mypage/dogRegister");
  };

  const onClickDogDetail = (event: MouseEvent<HTMLButtonElement>): void => {
    void router.push(`/mypage/dog/${event.currentTarget.id}`);
  };

  return (
    <>
      <S.DogsListWrapper>
        <S.TitleWrapper>
          <S.MyDogText>나의 댕댕이들</S.MyDogText>
          <Buttons
            onClick={onClickAddDog}
            label="댕댕이 추가하기"
            iconImg={<AddCircleIcon />}
          ></Buttons>
        </S.TitleWrapper>
        <S.Table>
          <table>
            <thead>
              <tr>
                <th scope="col">이름</th>
                <th>나이</th>
                <th>몸무게</th>
                <th>견종</th>
                <th>댕댕이 정보</th>
              </tr>
            </thead>
            {dogData?.fetchUserDogs.map((el) => (
              <>
                <tbody>
                  <tr>
                    <th>{el.name}</th>
                    <th>{el.age}살</th>
                    <th>{el.weight}kg</th>
                    <th>{dogType[el.breed]}</th>
                    <th>
                      <button id={el.id} onClick={onClickDogDetail}>
                        상세보기
                      </button>
                    </th>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </S.Table>
      </S.DogsListWrapper>
    </>
  );
};
