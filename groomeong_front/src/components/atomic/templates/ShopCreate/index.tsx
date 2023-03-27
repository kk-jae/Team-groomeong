import styled from "@emotion/styled";
import { FormProvider, useForm } from "react-hook-form";
const MainDiv = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: white;
  padding: 100px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  background-color: white;
  margin-bottom: 25px;
`;

export default function ShopCreateTemplate(): JSX.Element {
  // const [] = UseMutationCreateShop();

  const method = useForm({
    mode: "onChange",
  });

  const onclickRegister = (data: any): void => {
    console.log(data);
  };

  return (
    <>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(onclickRegister)}>
          <MainDiv>
            가게 이름
            <div>
              <Input name={"name"} />
            </div>
            전화번호{" "}
            <div>
              <Input name={"phone"} />
            </div>
            오픈 시간
            <div>
              <Input name={"openTime"} />
            </div>
            클로즈 시간
            <div>
              <Input name={"closeTime"} />
            </div>
            주소
            <div>
              <Input name={"address"} />
            </div>
            <button onClick={onclickRegister}>가게 등록</button>
          </MainDiv>
        </form>
      </FormProvider>
    </>
  );
}
