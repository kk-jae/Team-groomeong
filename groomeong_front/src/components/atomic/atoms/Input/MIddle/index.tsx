import { useState } from "react";
import * as S from "./index.styled";

// 사용 방법
// <Input label="라벨" placeholder="placeholder" error="에러메세지" />

interface IProps {
    label: string;
    placeholder: string;
    error: string;
}

export const InputMiddle = (props: IProps) => {
    const [focus, setFocus] = useState(false);

    const onFocusTest = () => {
        setFocus(true);
    };
    const onBlurTest = () => {
        setFocus(false);
    };

    return (
        <S.InputWrapper onFocus={onFocusTest} onBlur={onBlurTest}>
            <S.Label focus={focus} error={props.error}>
                {props.label}
            </S.Label>
            <S.InputTag placeholder={props.placeholder} error={props.error} />
            {props.error !== "" ? (
                <S.Error>{props.error}</S.Error>
            ) : (
                <S.Error></S.Error>
            )}
        </S.InputWrapper>
    );
};
