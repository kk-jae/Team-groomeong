import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

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

export const UseQueryFetchReservationByShop = () => {
  const { data } = useQuery<Pick<IQuery, "fetchReservationsByShop">>(
    FETCH_RESERVATIONS_BY_SHOP
  );
  return {
    data,
  };
};
