import styled from "styled-components";
import { motion } from "framer-motion";
import { Color, H3, Media } from "ui";

const StyledNotification = styled(motion.div)`
  position: fixed;
  top: 30%;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
  width: 15%;
  padding: 5px;
  background: ${Color.Green};
`;

const Message = styled(motion.h3)`
  text-align: center;
  ${H3}
  color: ${Color.PrimaryLight};
`;

export { StyledNotification, Message };
