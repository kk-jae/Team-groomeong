import * as S from "./index.style";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Buttons } from "../../../atoms/Buttons";
import { useRouter } from "next/router";

interface IListTableProps {
  dogName?: string;
  dogAge?: number;
  dogWeight?: number;
  dogType?: "SMALL" | "MEDIUM" | "LARGE" | "SPECIAL";
}

interface IDogType {
  SMALL: string;
  MEDIUM: string;
  LARGE: string;
  SPECIAL: string;
}

export const DogsList = (props: IListTableProps) => {
  const router = useRouter();

  const dogType: IDogType = {
    SMALL: "소형",
    MEDIUM: "중형",
    LARGE: "대형",
    SPECIAL: "특수견",
  };

  const onClickAddDog = () => {};

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
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{props.dogName}</th>
                <th>{props.dogAge}</th>
                <th>{props.dogWeight}</th>
                <th>{props.dogType ? dogType[props.dogType] : null}</th>
              </tr>
            </tbody>
          </table>
        </S.Table>
      </S.DogsListWrapper>
    </>
  );
};
