import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

interface IUseQueryFetchReservationByShop {
  data?: Pick<IQuery, "fetchReservationsByShop">;
}

export const FETCH_RESERVATIONS_BY_SHOP = gql`
  query fetchReservationsByShop($shopId: String) {
    fetchReservationsByShop(shopid: $shopId) {
      user {
        id
        name
        email
        image
      }
    }
  }
`;

export const UseQueryFetchReservationByShop = (
  shopId: string
): IUseQueryFetchReservationByShop => {
  const { data } = useQuery<Pick<IQuery, "fetchReservationsByShop">>(
    FETCH_RESERVATIONS_BY_SHOP,
    {
      variables: {
        shopId,
      },
    }
  );
  return {
    data,
  };
};
