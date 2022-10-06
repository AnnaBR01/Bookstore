import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui";

const StyledButton = styled(motion.button)`
  width: 100%;
  color: ${Color.White};
  background: ${Color.Primary};
  border: none;
  padding: 16px 0;
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

export { StyledButton };
