import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchReservationArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_RESERVATION = gql`
  query fetchReservation($reservationId: String!) {
    fetchReservation(reservationId: $reservationId) {
      id
      date
      time
      shop {
        id
        name
      }
      dog {
        id
        name
      }
    }
  }
`;

export const UseQueryFetchReservation = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchReservation">,
    IQueryFetchReservationArgs
  >(
    FETCH_RESERVATION

    // ,{
    //   variables:{reservationId:}
    // }
  );

  return {
    data,
  };
};
