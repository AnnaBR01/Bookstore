import styled from "styled-components";
import { LikeIcon } from "../../../assets";
import { Color } from "../../../ui";

const StyledButtonLike = styled.button`
  width: 56px;
  height: 56px;
  padding: 16px;
  background: ${Color.Primary};
  border: none;
  cursor: pointer;

  :disabled {
    background: ${Color.Secondary};
  }
`;

const Like = styled(LikeIcon)`
  width: 24px;
  height: 24px;
  stroke: ${Color.White};
  border: none;
  cursor: pointer;

  :hover,
  :active {
    stroke: ${Color.Red};
    fill: ${Color.Red};
  }
`;

export { StyledButtonLike, Like };
