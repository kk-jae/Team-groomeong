import * as S from "./index.style";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Buttons } from "../../../atoms/Buttons";
import { useRouter } from "next/router";
import {
  FETCH_USER_DOGS,
  UseQueryFetchUserDogs,
} from "../../../../commons/hooks/query/UseQueryFetchUserDogs";
import { UseMutationDeleteDog } from "../../../../commons/hooks/mutation/UseMutationDeleteDog";
import { MouseEvent } from "react";

interface IDogType {
  SMALL: string;
  MEDIUM: string;
  LARGE: string;
  SPECIAL: string;
}

export const DogsList = () => {
  const router = useRouter();
  const { data: dogData } = UseQueryFetchUserDogs();
  const [deleteDog] = UseMutationDeleteDog();
  const dogType: IDogType = {
    SMALL: "소형",
    MEDIUM: "중형",
    LARGE: "대형",
    SPECIAL: "특수견",
  };

  const onClickAddDog = () => {
    router.push("/mypage/dogRegister");
  };

  const onClickDelete = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      await deleteDog({
        variables: { id: event.currentTarget.id },
        refetchQueries: [{ query: FETCH_USER_DOGS }],
      });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
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
                <th>삭제하기</th>
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
                      <button id={el.id} onClick={onClickDelete}>
                        댕댕이 삭제
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
