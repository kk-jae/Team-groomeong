import { useRouter } from "next/router";

interface IuseMoveToPage {
  onClickMoveToPage: (url: string) => () => void;
}

export const useMoveToPage = (): IuseMoveToPage => {
  const router = useRouter();

  const onClickMoveToPage = (url: string) => () => {
    void router.push(url);
  };

  return {
    onClickMoveToPage,
  };
};
