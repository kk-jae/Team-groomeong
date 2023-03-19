import { Button } from "../../ButtonSize/ButtonSmall/Button";
import * as S from "./index.style";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { ButtonIconDefault } from "../../ButtonSize/ButtonSmall/ButtonIcon/ButtonIconDefault";

interface ITopBarMapProps {
  loggedIn: boolean;
}

export const TopBarMap = (props: ITopBarMapProps) => {
  return (
    <>
      <S.TopBarBox>
        <S.TopBarLogo>
          <img src="/image/img_logo_raw_black.png" alt="" />
        </S.TopBarLogo>
        <S.TopBarButtons loggedIn={props.loggedIn}>
          {props.loggedIn ? (
            <>
              <ButtonIconDefault
                iconImg={<EventAvailableIcon />}
                label="예약일정"
                variation={"tertiary"}
              ></ButtonIconDefault>
              <Button
                size="small"
                label="로그아웃"
                variation="tertiary"
              ></Button>
              <S.TopBarProfile>
                <img src={"image/icon_dog_profile.png"} alt="" />
              </S.TopBarProfile>
            </>
          ) : (
            <>
              <Button size="small" label="로그인" variation="tertiary"></Button>
              <Button
                size="small"
                label="회원가입"
                variation="tertiary"
              ></Button>
            </>
          )}
        </S.TopBarButtons>
      </S.TopBarBox>
    </>
  );
};
