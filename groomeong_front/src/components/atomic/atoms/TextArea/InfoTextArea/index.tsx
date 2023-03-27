import React from "react";
import { useFormContext } from "react-hook-form";
import {
  InfoTextAreaWrapper,
  InfoTextAreaHeader,
  InfoTextAreaLabel,
  InfoTextAreaContents,
  Error,
} from "./index.style";

interface IInfoTextAreaProps {
  title: string;
  name: string;
  content?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
}

const InfoTextArea = (props: IInfoTextAreaProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <InfoTextAreaWrapper>
      <InfoTextAreaHeader>
        <InfoTextAreaLabel>{props.title}</InfoTextAreaLabel>
      </InfoTextAreaHeader>
      <InfoTextAreaContents
        placeholder={props.placeholder}
        disabled={props.disabled}
        {...register(props.name)}
        defaultValue={props.defaultValue}
      >
        {props.content}
      </InfoTextAreaContents>
      <Error>{errors[props.name]?.message}</Error>
    </InfoTextAreaWrapper>
  );
};

export default InfoTextArea;
