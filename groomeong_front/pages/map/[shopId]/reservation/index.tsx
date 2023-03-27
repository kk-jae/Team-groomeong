import { ReservationTemplate } from "../../../../src/components/atomic/templates/Reservation";
import { withAuth } from "../../../../src/components/commons/withAuth";

function ReservationPage() {
  return <ReservationTemplate />;
}

export default withAuth(ReservationPage);
