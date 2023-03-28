import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

// hooks에 useAuth폴더 만들어 놓음.
// eslint에서 끔
// eslint-disable-next-line react/display-name
export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      Modal.confirm({
        content: "로그인을 먼저 해주세요",
      });
      void router.push("/login");
    }
  }, []);

  return (
    <>
      <Component {...props} />
    </>
  );
};
