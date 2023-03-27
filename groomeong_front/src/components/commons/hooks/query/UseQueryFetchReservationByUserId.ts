import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

interface IUseQueryFetchReservationByUser {
  data?: Pick<IQuery, "fetchReservationsByUser">;
}

export const FETCH_RESERVATIONS_BY_USER = gql`
  query {
    fetchReservationsByUser {
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
      user {
        id
        name
        email
        phone
        image
      }
    }
  }
`;
// 현재 타입이 reservationArgs임, 이후에 ReservationByUserId 타입이 추가되면 변경해야 함. => 완료>>? => 미완료, 혹시 다른 ars를 써야하는지?
export const UseQueryFetchReservationByUser =
  (): IUseQueryFetchReservationByUser => {
    const { data } = useQuery<Pick<IQuery, "fetchReservationsByUser">>(
      FETCH_RESERVATIONS_BY_USER
    );

    return {
      data,
    };
  };
