import styled from "styled-components";
import { Media } from "./../../ui";

const StyledHomePage = styled.div`
  display: grid;
  grid-gap: 72px;
  margin-block: 72px;

  ${Media.SM} {
    grid-gap: 56px;
    margin-block: 56px;
  }
`;

export { StyledHomePage };
