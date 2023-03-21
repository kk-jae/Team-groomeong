import { ShopDetail } from "../../src/components/atomic/organisms/ShopDetail";

export default function ShopDetailPage() {
  return (
    <ShopDetail
      shoppingLabel={"댕댕샵"}
      shopRating={3}
      time={"10:00~20:00"}
      address={"서울 금천구 구로동"}
      phone={"010-2232-2322"}
      isLoggedIn={false}
    />
  );
}
