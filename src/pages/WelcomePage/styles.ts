import { motion } from "framer-motion";
import styled from "styled-components";
import { Media } from "ui";

const StyledWelcomePage = styled(motion.div)`
  display: grid;
  justify-items: center;
  align-items: center;
  margin-block: 72px;

  ${Media.MD} {
    margin-block: 56px;
  }
`;

export { StyledWelcomePage };
