import { Buttons } from "../../Buttons";
import * as S from "./index.style";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

interface ITopBarDefaultProps {
  loggedIn: boolean;
}

export const TopBarDefault = (props: ITopBarDefaultProps) => {
  return (
    <>
      <S.TopBarBox>
        <S.TopBarLogo>
          <img src="/image/img_logo_raw_black.png" alt="" />
        </S.TopBarLogo>
        <S.TopBarButtons loggedIn={props.loggedIn}>
          {props.loggedIn ? (
            <>
              <Buttons size="small" label="지도로가기" variation="tertiary" border="none"/>
              <Buttons
                iconImg={<EventAvailableIcon />}
                label="예약일정"
                variation={"tertiary"}
              ></Buttons>
              <Buttons size="small" label="로그아웃" variation="tertiary" border="none"/>
              <S.TopBarProfile>
                <img src={"image/icon_dog_profile.png"} alt="" />
              </S.TopBarProfile>
            </>
          ) : (
            <>
              <Buttons size="small" label="로그인" variation="tertiary" border="none"/>
              <Buttons size="small" label="회원가입" variation="tertiary" border="none"/>
              <Buttons size="small" label="지도로가기" variation="tertiary" border="none"/>
            </>
          )}
        </S.TopBarButtons>
      </S.TopBarBox>
    </>
  );
};
