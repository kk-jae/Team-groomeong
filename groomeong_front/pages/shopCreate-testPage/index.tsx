import ShopCreateTemplate from "../../src/components/atomic/templates/ShopCreate";
import { withAuth } from "../../src/components/commons/withAuth";

function ShopCreate(): JSX.Element {
  return <ShopCreateTemplate />;
}

export default withAuth(ShopCreate);
