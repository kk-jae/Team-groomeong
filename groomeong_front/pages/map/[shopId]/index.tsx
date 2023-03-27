// import { useRouter } from "next/router";
import { ShopDetail } from "../../../src/components/atomic/organisms/ShopDetail";
// import { UseQueryFetchShop } from "../../../src/components/commons/hooks/query/UseQueryFetchShop";

export default function ShopDetailPage(): JSX.Element {
  // const router = useRouter();
  // const { data } = UseQueryFetchShop(String(router.query.shopId));
  // const {data}= UseQueryFetchShop()
  // const [accessToken] = useRecoilState(accessTokenState);

  return (
    <ShopDetail
    // shoppingLabel={data?.fetchShop.name}
    // shopRating={data?.fetchShop.averageStar}
    // time={`${data?.fetchShop.openHour} ~ ${data?.fetchShop.closeHour}`}
    // address={data?.fetchShop.address}
    // phone={data?.fetchShop.phone}
    // isLoggedIn={accessToken}
    />
  );
}
