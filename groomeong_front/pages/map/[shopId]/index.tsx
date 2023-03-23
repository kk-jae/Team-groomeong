import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../src/commons/Store";
import { ShopDetail } from "../../../src/components/atomic/organisms/ShopDetail";
// import { UseQueryFetchShop } from "../../../src/components/commons/hooks/query/UseQueryFetchShop";

export default function ShopDetailPage() {
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
