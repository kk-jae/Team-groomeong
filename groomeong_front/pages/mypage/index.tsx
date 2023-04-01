import { MyPageTemplate } from "../../src/components/atomic/templates/MyPage";
import { useAuth } from "../../src/components/commons/hooks/useAuth/UseAuth";

export default function MyPagePage(): JSX.Element {
  useAuth();
  return <MyPageTemplate />;
}
