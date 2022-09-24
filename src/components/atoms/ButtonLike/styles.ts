import styled from "styled-components";
import { LikeIcon } from "../../../assets";
import { Color } from "../../../ui";

const StyledButtonLike = styled.button<{ $isFavorites: boolean }>`
  width: 56px;
  height: 56px;
  padding: 16px;
  background: ${({ $isFavorites }) => ($isFavorites ? "none" : Color.Primary)};
  border: none;
  cursor: pointer;

  :disabled {
    background: ${Color.Secondary};
  }
`;

const Like = styled(LikeIcon)<{ $isFavorites: boolean }>`
  width: 24px;
  height: 24px;
  stroke: ${({ $isFavorites }) => ($isFavorites ? Color.Red : Color.White)};
  fill: ${({ $isFavorites }) => ($isFavorites ? Color.Red : "none")};
  border: none;
  cursor: pointer;

  :hover,
  :active {
    stroke: ${Color.Red};
    fill: ${Color.Red};
  }
`;

export { StyledButtonLike, Like };
