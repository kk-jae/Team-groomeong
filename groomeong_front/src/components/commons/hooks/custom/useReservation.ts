import { useRouter } from "next/router";
import { Modal } from "antd";
import { UseMutationCreateReservation } from "../mutation/UseMutationCreateReservation";

export const useReservationDog = () => {
  const router = useRouter();
  const [createReservation] = UseMutationCreateReservation();

  const onClickReservationDog =
    (
      date: string,
      shopId: string,
      userId: string,
      dogId: string,
      time: string
    ) =>
    async () => {
      try {
        const result = await createReservation({
          variables: {
            createReservationInput: {
              date,
              time,
              shopId,
              userId,
              dogId,
            },
          },
        });
        Modal.success({
          content: "예약을 성공하였습니다.",
        });
        router.push("/mypage");
      } catch (error) {
        if (error instanceof Error) {
          Modal.error({
            content: error.message,
          });
        }
      }
    };

  return { onClickReservationDog };
};
