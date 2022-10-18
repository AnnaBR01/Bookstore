import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, H3 } from "ui";

const StyledSignUpForm = styled.form`
  display: grid;
  grid-gap: 16px;
`;

const InputError = styled.span`
  color: ${Color.Red};
`;

const ButtonForm = styled(motion.button)`
  width: 100%;
  color: ${Color.White};
  background: ${Color.Primary};
  border: none;
  padding: 16px 0;
  margin-top: 24px;
  font-style: normal;
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
`;

const Error = styled.p`
  ${H3}
  color: ${Color.Red}
`;

export { StyledSignUpForm, InputError, ButtonForm, Error };
