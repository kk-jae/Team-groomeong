import { gql, useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteReservationArgs,
} from "../../../../commons/types/generated/types";

const DELETE_RESERVATION = gql`
  mutation deleteReservation($reservationId: String!) {
    deleteReservation(reservationId: $reservationId)
  }
`;

export const UseMutationDeleteReservation = (
  reservationId: IMutationDeleteReservationArgs
) => {
  const [deleteReservation] = useMutation<
    Pick<IMutation, "deleteReservation">,
    IMutationDeleteReservationArgs
  >(DELETE_RESERVATION, { variables: reservationId });

  return [deleteReservation];
};
