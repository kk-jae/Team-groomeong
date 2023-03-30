import { ReservationTemplate } from "../../../../src/components/atomic/templates/Reservation";
import { useAuth } from "../../../../src/components/commons/hooks/useAuth/UseAuth";

export default function ReservationPage(): JSX.Element {
  useAuth();
  return <ReservationTemplate />;
}
