import { ReservationListTemplate } from "../../src/components/atomic/templates/ReservationList";
import { useAuth } from "../../src/components/commons/hooks/useAuth/UseAuth";

export default function MyPagePage(): JSX.Element {
  useAuth();
  return <ReservationListTemplate />;
}
