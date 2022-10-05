import { Portal, PortalTarget } from "components";
import { StyledNotification, Message } from "./styles";

interface IProps {
  value: string;
  toggleIsOpenNotification: () => void;
}

export const Notification = ({ value, toggleIsOpenNotification }: IProps) => {
  setTimeout(() => {
    toggleIsOpenNotification();
  }, 3000);

  return (
    <Portal target={PortalTarget.REWIEWS}>
      <StyledNotification
        animate={{ width: "40%", height: "20%" }}
        initial={{ width: "0", height: "0" }}
        exit={{ width: "0", height: "0" }}
        transition={{ duration: 2 }}
      >
        <Message
          animate={{ fontSize: "16px" }}
          initial={{ fontSize: "0" }}
          exit={{ fontSize: "0" }}
          transition={{ duration: 2 }}
        >
          {value}
        </Message>
      </StyledNotification>
    </Portal>
  );
};
