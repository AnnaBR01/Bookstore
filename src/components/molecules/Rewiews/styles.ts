import styled from "styled-components";
import { motion } from "framer-motion";
import { StylesConfig } from "react-select";
import { Color, H2, BODY2, Media } from "ui";
import { IOption } from "./Rewiews";

const StyledRewiews = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
  background-color: rgba(225, 237, 237, 0.8);
`;

const Modal = styled.div`
  position: absolute;
  top: 30%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 300px;
  padding: 25px;
  background: ${Color.Green};

  ${Media.MD} {
    width: 80%;
  }
`;

const Title = styled.h2`
  text-align: center;
  ${H2}
  color: ${Color.PrimaryLight};
`;

export const customStyles: StylesConfig<IOption> = {
  container: (provided) => ({
    ...provided,
    width: 150,
    gridArea: "select",
    justifySelf: "center",

    "@media screen and (max-width: 768px)": {
      ...provided,
      width: 100,
    },
  }),

  control: (provided) => ({
    ...provided,
    borderRadius: 5,
    borderWeight: 1,
    background: Color.Secondary,
    borderColor: Color.PrimaryLight,
  }),

  singleValue: (provided) => ({
    ...provided,
    color: Color.PrimaryLight,

    "@media screen and (max-width: 768px)": {
      ...provided,
    },
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: Color.PrimaryLight,
  }),
};

const Message = styled.p`
  text-align: center;
  ${BODY2}
  color: ${Color.PrimaryLight};
`;

const Button = styled(motion.button)`
  max-width: 30%;
  width: 100%;
  padding: 15px;
  color: ${Color.White};
  background: ${Color.PrimaryLight};
  border: none;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;

  :hover,
  :active {
    background: ${Color.PrimaryLight};
  }

  :disabled {
    background: ${Color.Secondary};
  }

  ${Media.MD} {
    max-width: 80%;
    padding: 7px;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
  }
`;

export { StyledRewiews, Modal, Title, Message, Button };
