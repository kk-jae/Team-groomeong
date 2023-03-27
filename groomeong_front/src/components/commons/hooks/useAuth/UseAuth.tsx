import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../../commons/Store";

export const useAuth = (): void => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable); // api요청등을 글로벌로 하는...(필요한곳에만하는것.)

  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      // 받아온 accessToken유무만 판단하면됨 // 담는건 app.tsx에서 하기에.
      if (newAccessToken === undefined) {
        alert("로그인 후 이용 가능합니다");
        void router.push(`/login`);
      }
    });
  }, []);
};
