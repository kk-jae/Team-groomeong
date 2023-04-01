import DogDetailTemplate from "../../../../src/components/atomic/templates/DogDetail";
import { useAuth } from "../../../../src/components/commons/hooks/useAuth/UseAuth";

export default function DogDetailPage(): JSX.Element {
  useAuth();
  return <DogDetailTemplate />;
}
