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
    }
  }
`;

export const UseQueryFetchReservation = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchReservation">,
    IQueryFetchReservationArgs
  >(
    FETCH_RESERVATION
    // 아이디 넘겨받기 import 하는곳에서  const {data} = UseQueryFetchReservation(reservationId:string) 그 후 => 얘를 여기 소괄호에 받기. // 이런식으로
    // ,{
    //     variables:{reservationId:}
    // }
  );
  return {
    data,
  };
};
