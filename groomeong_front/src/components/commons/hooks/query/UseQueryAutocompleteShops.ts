import {
  IQuery,
  IQueryAutocompleteShopsArgs,
} from "../../../../commons/types/generated/types";
import { gql, useQuery } from "@apollo/client";

export const QUERY_AUTOCOMPLETE_SHOPS = gql`
  query autocompleteShops($search: String) {
    autocompleteShops(search: $search) {
      shopid
      name
      lat
      lng
      phone
      openhour
      closehour
      address
      averagestar
      id
      imageurl
      isthumbnail
    }
  }
`;

const UseQueryAutocomplateShops = (search: string) => {
  const { data } = useQuery<
    Pick<IQuery, "autocompleteShops">,
    IQueryAutocompleteShopsArgs
  >(QUERY_AUTOCOMPLETE_SHOPS, {
    variables: {
      search,
    },
  });

  return { data };
};

export default UseQueryAutocomplateShops;
