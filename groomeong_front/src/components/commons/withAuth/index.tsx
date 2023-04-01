import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/Store";

// eslint-disable-next-line react/display-name
export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        Modal.confirm({
          content: "로그인 후 이용 가능합니다.",
        });
        void router.push(`/login`);
      }
    });
  }, []);

  return (
    <>
      <Component {...props} />
    </>
  );
};
