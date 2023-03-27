import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

interface IUseQueryFetchReservationByShop {
  data?: Pick<IQuery, "fetchReservationsByShop">;
}

export const FETCH_RESERVATIONS_BY_SHOP = gql`
  query {
    fetchReservationsByShop {
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

export const UseQueryFetchReservationByShop =
  (): IUseQueryFetchReservationByShop => {
    const { data } = useQuery<Pick<IQuery, "fetchReservationsByShop">>(
      FETCH_RESERVATIONS_BY_SHOP
    );
    return {
      data,
    };
  };
