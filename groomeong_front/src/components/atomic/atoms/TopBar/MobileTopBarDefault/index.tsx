import * as S from "./index.style";
import { useMoveToPage } from "../../../../commons/hooks/custom/useMovedToPage";
import { useLogout } from "../../../../commons/hooks/custom/useLogout";
import useLoggined from "../../../../commons/hooks/custom/useLoggined";

export const TopBarDefaultMobile = (): JSX.Element => {
  const loggedIn = useLoggined();
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickLogOut } = useLogout();

  return (
    <>
      {loggedIn ? (
        <>
          <S.MenuBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.1 }}
          >
            <S.MenuButton onClick={onClickMoveToPage("/map")}>
              지도보기
            </S.MenuButton>
            <S.MenuButton onClick={onClickMoveToPage("/reservation")}>
              예약일정
            </S.MenuButton>
            <S.MenuButton onClick={onClickLogOut}>로그아웃</S.MenuButton>
          </S.MenuBox>
        </>
      ) : (
        <>
          <S.MenuBox>
            <S.MenuButton onClick={onClickMoveToPage("/login")}>
              로그인
            </S.MenuButton>
            <S.MenuButton onClick={onClickMoveToPage("/signup")}>
              회원가입
            </S.MenuButton>
            <S.MenuButton onClick={onClickMoveToPage("/map")}>
              지도 보기
            </S.MenuButton>
          </S.MenuBox>
        </>
      )}
    </>
  );
};
