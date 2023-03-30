import { MyPageEditTemplate } from "../../../src/components/atomic/templates/MyPageEdit";
import { useAuth } from "../../../src/components/commons/hooks/useAuth/UseAuth";

export default function MyPagePage(): JSX.Element {
  useAuth();
  return <MyPageEditTemplate />;
}
