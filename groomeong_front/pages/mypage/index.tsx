import { MyPageTemplate } from "../../src/components/atomic/templates/MyPage";
import { withAuth } from "../../src/components/commons/withAuth";

function MyPagePage(): JSX.Element {
  return <MyPageTemplate />;
}

export default withAuth(MyPagePage);
