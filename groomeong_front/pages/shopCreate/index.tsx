import ShopCreateTemplate from "../../src/components/atomic/templates/ShopCreate";
import { withAuth } from "../../src/components/commons/withAuth";

function ShopCreate() {
  return <ShopCreateTemplate />;
}

export default withAuth(ShopCreate);
