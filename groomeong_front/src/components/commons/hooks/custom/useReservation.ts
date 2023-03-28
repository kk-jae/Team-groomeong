import { useRouter } from "next/router";
import { Modal } from "antd";
import { UseMutationCreateReservation } from "../mutation/UseMutationCreateReservation";

interface IuseReservationDog {
  onClickReservationDog: (
    date: string,
    shopId: string,
    userId: string,
    dogId: string,
    time: string
  ) => () => Promise<void>;
}

export const useReservationDog = (): IuseReservationDog => {
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
        await createReservation({
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
        alert("예약 성공");
        await router.push("/reservation");
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
