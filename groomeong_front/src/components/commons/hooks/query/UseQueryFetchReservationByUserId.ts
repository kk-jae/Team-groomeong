import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchReservationArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_RESERVATION_BY_USER_ID = gql`
  query {
    fetchReservationsByUserId {
      id
      date
      time
      shop {
        name
      }
      dog {
        name
      }
    }
  }
`;
//현재 타입이 reservationArgs임, 이후에 ReservationByUserId 타입이 추가되면 변경해야 함.
export const UseQueryFetchReservationByUserId = () => {
  const { data } = useQuery(FETCH_RESERVATION_BY_USER_ID);

  return {
    data,
  };
};
