import { Select } from "antd";
import { UseQueryFetchUserDogs } from "../../commons/hooks/query/UseQueryFetchUserDogs";

interface IFetchUserDogs {
  value: string;
  id: string;
}
export const DogSelect = (props: any): JSX.Element => {
  const { data: dataDog } = UseQueryFetchUserDogs();

  const dogsArr = [
    dataDog?.fetchUserDogs.map((el) => ({ value: el.name, id: el.id })),
  ];

  const onChange = (value: string, id: IFetchUserDogs): void => {
    props.setDogId(id.id);
  };

  return (
    <Select
      style={{ width: 428 }}
      size="large"
      showSearch
      placeholder="댕댕이를 선택해주세요"
      optionFilterProp="children"
      onChange={onChange}
      options={dogsArr[0]}
    />
  );
};
