import styled from "styled-components";
import { ChevronTopIcon } from "../../../assets";
import { Color } from "../../../ui";

const StyledChevronTop = styled.button`
  vertical-align: middle;
  width: 16px;
  height: 16px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ChevronTop = styled(ChevronTopIcon)`
  fill: ${Color.Primary};
  border: none;
  cursor: pointer;

  :disabled {
    fill: ${Color.Gray};
  }
`;

export { StyledChevronTop, ChevronTop };
