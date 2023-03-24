import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

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
//현재 타입이 reservationArgs임, 이후에 ReservationByUserId 타입이 추가되면 변경해야 함. => 완료>>?
export const UseQueryFetchReservationByUserId = () => {
  const { data } = useQuery<Pick<IQuery, "fetchReservationsByUserId">>(
    FETCH_RESERVATION_BY_USER_ID
  );

  return {
    data,
  };
};
