import styled from "@emotion/styled";
import { Modal } from "antd";
import ErrorIcon from "@mui/icons-material/Error";
import * as GS from "../../../../../theme/global";

interface IModalProps {
  state: boolean;
}

export const ModalStyles = styled(Modal)`
  .ant-modal-content {
    width: 428px;
    height: 312px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border: 1px solid
      ${(props: IModalProps) =>
        props.state ? GS.state.positive : GS.state.negative};

    h3 {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: ${(props: IModalProps) =>
        props.state ? GS.state.positive : GS.state.negative};
    }

    p {
      color: ${GS.contents.contentSecondary};
      ${GS.Paragraph.Large};
    }

    .ant-btn.css-dev-only-do-not-override-ph9edi.ant-btn-default {
      display: none;
    }

    .ant-btn.css-dev-only-do-not-override-ph9edi.ant-btn-primary {
      background-color: ${(props: IModalProps) =>
        props.state ? GS.state.positive : GS.state.negative};
    }
  }
`;

export const ScreamerIcon = styled(ErrorIcon)`
  color: ${(props: IModalProps) =>
    props.state ? GS.state.positive : GS.state.negative};
  width: 24px;
  height: 24px;
  padding: 2px;
`;
