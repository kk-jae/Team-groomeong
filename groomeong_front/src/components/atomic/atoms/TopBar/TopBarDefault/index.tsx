import { Buttons } from "../../Buttons";
import * as S from "./index.style";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMovedToPage";
import { useLogout } from "../../../../commons/hooks/custom/useLogout";
import { UseQueryFetchLoginUser } from "../../../../commons/hooks/query/UseQueryFetchLoginUser";
import useLoggined from "../../../../commons/hooks/custom/useLoggined";
import { useState } from "react";
import { TopBarDefaultMobile } from "../MobileTopBarDefault";

export const TopBarDefault = (): JSX.Element => {
  const { data } = UseQueryFetchLoginUser();
  const loggedIn = useLoggined();
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickLogOut } = useLogout();
  const [onMenuBox, setOnMenuBox] = useState(false);

  return (
    <>
      <S.TopBarBox>
        <S.TopBarLogo onClick={onClickMoveToPage("/home")}>
          <img src="/image/img_logo_raw_black.png" alt="" />
        </S.TopBarLogo>

        <S.TopBarButtons loggedIn={loggedIn}>
          {onMenuBox ? <S.MenuBox></S.MenuBox> : <></>}
          {loggedIn ? (
            <>
              <Buttons
                size="small"
                label="지도 보기"
                variation="tertiary"
                border="none"
                onClick={onClickMoveToPage("/map")}
              />
              <Buttons
                iconImg={<EventAvailableIcon />}
                label="예약일정"
                variation={"tertiary"}
                onClick={onClickMoveToPage("/reservation")}
              ></Buttons>
              <Buttons
                size="small"
                label="로그아웃"
                variation="tertiary"
                border="none"
                onClick={onClickLogOut}
              />
              <S.TopBarProfile onClick={onClickMoveToPage("/mypage")}>
                <img
                  src={
                    data?.fetchLoginUser.image != null
                      ? `https://storage.googleapis.com/${data?.fetchLoginUser.image}`
                      : "/image/img-dog-detail.png"
                  }
                  alt=""
                />
              </S.TopBarProfile>
            </>
          ) : (
            <>
              <Buttons
                size="small"
                label="로그인"
                variation="tertiary"
                border="none"
                onClick={onClickMoveToPage("/login")}
              />
              <Buttons
                size="small"
                label="회원가입"
                variation="tertiary"
                border="none"
                onClick={onClickMoveToPage("/signup")}
              />
              <Buttons
                size="small"
                label="지도 보기"
                variation="tertiary"
                border="none"
                onClick={onClickMoveToPage("/map")}
              />
            </>
          )}
        </S.TopBarButtons>

        <S.HamBurger
          onClick={() => {
            setOnMenuBox(!onMenuBox);
          }}
        ></S.HamBurger>
        {onMenuBox ? <TopBarDefaultMobile></TopBarDefaultMobile> : <></>}
      </S.TopBarBox>
    </>
  );
};
