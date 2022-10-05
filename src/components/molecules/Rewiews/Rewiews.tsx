import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { Portal, PortalTarget } from "components";
import { getRewiewMessage } from "utils";
import { StyledRewiews, Modal, Title, customStyles, Message, Button } from "./styles";

export interface IOption {
  readonly value: number;
  readonly label: string;
}

export const options: IOption[] = [
  { value: 1, label: "★" },
  { value: 2, label: "★★" },
  { value: 3, label: "★★★" },
];

interface IProps {
  toggleIsOpenRewiews: (value: boolean) => void;
}

export const Rewiews = ({ toggleIsOpenRewiews }: IProps) => {
  const [userReview, changeUserReview] = useState<number>(0);

  const handleRewiews = () => {
    toggleIsOpenRewiews(false);
  };

  const handleRewiew = (option: SingleValue<IOption>) => {
    option && changeUserReview(option.value);
  };

  return (
    <Portal target={PortalTarget.REWIEWS}>
      <StyledRewiews
        animate={{ x: "0" }}
        initial={{ x: "-100%" }}
        exit={{ x: "-100%" }}
        transition={{ duration: 2 }}
      >
        <Modal>
          <Title>Please rate the site</Title>

          <Select
            options={options}
            styles={customStyles}
            isMulti={false}
            isSearchable={false}
            onChange={handleRewiew}
          />

          <Message>{getRewiewMessage(userReview)}</Message>

          <Button onClick={handleRewiews}>Close</Button>
        </Modal>
      </StyledRewiews>
    </Portal>
  );
};
