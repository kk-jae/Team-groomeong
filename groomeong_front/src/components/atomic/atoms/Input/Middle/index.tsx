import { useState } from "react";
import { useFormContext } from "react-hook-form";
import * as S from "./index.styled";

// 사용 방법
// <Input label="라벨" placeholder="placeholder" error="에러메세지" />

interface IProps {
  defaultValue?: string;
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  maxLength?: number;
  lastText?: string;
  value?: string;
}

export const InputMiddle = (props: IProps): JSX.Element => {
  const [focus, setFocus] = useState(false);

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const onFocusTest = (): void => {
    setFocus(true);
  };
  const onBlurTest = (): void => {
    setFocus(false);
  };

  return (
    <S.InputWrapper onFocus={onFocusTest} onBlur={onBlurTest}>
      <S.Label focus={focus} error={errors[props.name]?.message as string}>
        {props.label}
      </S.Label>
      <S.InputTag
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        error={errors[props.name]?.message as string}
        {...register(props.name)}
        defaultValue={props.defaultValue}
        disabled={props.disabled}
        maxLength={props.maxLength ?? undefined}
        value={props.value}
      />
      <S.InputLastText>{props.lastText}</S.InputLastText>
      <S.Error>{errors[props.name]?.message}</S.Error>
    </S.InputWrapper>
  );
};
