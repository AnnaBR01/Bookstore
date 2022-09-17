import styled from "styled-components";
import { Media } from "./index";

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  ${Media.MD} {
    padding-inline: 40px;
  }

  ${Media.SM} {
    padding-inline: 24px;
  }
`;

export { Container };
