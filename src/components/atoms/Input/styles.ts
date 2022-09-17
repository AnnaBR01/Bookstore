import styled from "styled-components";
import { Color } from "../../../ui";

const WrapperInput = styled.div`
  display: grid;
  grid-gap: 4px;
`;

const StyledInput = styled.input`
  padding: 14px 0 10px 20px;
  background: none;
  outline: none;
  color: ${Color.Secondary};
  border: 1px solid ${Color.Secondary};
  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  :disabled {
    background: ${Color.Gray};
  }
`;

const Label = styled.p`
  font-weight: 700;
`;

export { WrapperInput, StyledInput, Label };
