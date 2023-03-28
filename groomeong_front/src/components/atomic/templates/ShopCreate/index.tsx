import styled from "@emotion/styled";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { withPromiseVoidFunc } from "../../../../commons/Utils/withFunc";
import { UseMutationCreateShop } from "../../../commons/hooks/mutation/UseMutationCreateShop";
import { InputMiddle } from "../../atoms/Input/Middle";
import Image from "./Image";
export const MainDiv = styled.div`
  width: 1000px;
  background-color: white;
  padding: 100px;
`;

export default function ShopCreateTemplate(): JSX.Element {
  const [createShop] = UseMutationCreateShop();
  const [id, setId] = useState("");
  const createMethod = useForm({
    mode: "onChange",
  });
  const onSubmitCreateShop = async (data: any) => {
    try {
      const { data: fetchData } = await createShop({
        variables: {
          createShopInput: {
            ...data,
          },
        },
      });

      if (fetchData != null) {
        setId(fetchData?.createShop.id);
      }
    } catch (error) {
      if (error instanceof Error) alert(error);
    }
  };

  return (
    <>
      <div>
        <FormProvider {...createMethod}>
          <form
            onSubmit={createMethod.handleSubmit(
              withPromiseVoidFunc(onSubmitCreateShop)
            )}
          >
            <MainDiv>
              <InputMiddle label="가게이름" name="name" />
              <InputMiddle label="주소" name="address" />
              <InputMiddle label="전화번호" name="phone" />
              <InputMiddle label="오픈시간" name="openHour" />
              <InputMiddle label="클로즈시간" name="closeHour" />
              <button>가게 등록</button>
            </MainDiv>
          </form>
        </FormProvider>
        <Image id={id} />
      </div>
    </>
  );
}
