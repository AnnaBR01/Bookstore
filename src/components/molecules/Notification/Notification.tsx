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
        animate={{ x: 0 }}
        initial={{ x: 2500 }}
        exit={{ x: 2500 }}
        transition={{ duration: 1 }}
      >
        <Message>{value}</Message>
      </StyledNotification>
    </Portal>
  );
};
