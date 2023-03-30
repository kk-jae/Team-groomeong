import { DogRegisterTemplate } from "../../../src/components/atomic/templates/DogRegister";
import { useAuth } from "../../../src/components/commons/hooks/useAuth/UseAuth";

export default function EmailAuthPage(): JSX.Element {
  useAuth();
  return <DogRegisterTemplate />;
}
