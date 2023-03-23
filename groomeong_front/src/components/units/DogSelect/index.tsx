import { Select } from "antd";

const dogs = [
  { value: "멍재훈" },
  { value: "멍광기" },
  { value: "멍하은" },
  { value: "멍현재" },
];

export const DogSelect = (props: any) => {
  const onChange = (value: string) => {
    // console.log(`${value}`);
    props.setDog(value);
  };

  return (
    <Select
      style={{ width: 428 }}
      size="large"
      showSearch
      placeholder="댕댕이를 선택해주세요"
      optionFilterProp="children"
      onChange={onChange}
      // options={[{ value: dogs[0].name }, { value: "아놔" }]}
      options={[...dogs]}
    />
  );
};
