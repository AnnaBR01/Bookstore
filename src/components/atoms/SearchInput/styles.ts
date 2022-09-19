import styled from "styled-components";
import { Color, Media } from "../../../ui";

const StyledSearchInput = styled.input`
  border: none;
  outline: none;
  color: ${Color.Secondary};
  background: ${Color.Light};
  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  min-width: 480px;

  ${Media.LG} {
    min-width: 225px;
  }

  ${Media.MD} {
    min-width: 200px;
  }
`;

export { StyledSearchInput };
