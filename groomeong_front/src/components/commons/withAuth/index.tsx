import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const withAuth = (Component: any) => (props: any) => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      Modal.confirm({
        content: "로그인을 먼저 해주세요",
      });
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Component {...props} />
    </>
  );
};
