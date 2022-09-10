import styled from "styled-components";
import { Color } from "../../../ui";

const StyledButton = styled.button`
  color: ${Color.White};
  background: ${Color.Primary};
  border: none;
  padding: 16px 0;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;
`;

export { StyledButton };
