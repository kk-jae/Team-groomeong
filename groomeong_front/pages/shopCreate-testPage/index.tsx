import ShopCreateTemplate from "../../src/components/atomic/templates/ShopCreate";
import { useAuth } from "../../src/components/commons/hooks/useAuth/UseAuth";

export default function ShopCreate(): JSX.Element {
  useAuth();
  return <ShopCreateTemplate />;
}
