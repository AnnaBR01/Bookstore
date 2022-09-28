import styled from "styled-components";

import { Color, Media } from "../../../ui";
import { StyledButton } from "../../atoms/Button/styles";

const StyledSubscription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 56px 64px;
  background: ${Color.Purple};
`;

const Text = styled.p`
  margin-bottom: 32px;
  line-height: 28px;
  color: ${Color.Secondary};
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 80%;
  padding: 16px 24px;
  border: none;
  outline: none;
  color: ${Color.Secondary};
  background: ${Color.White};
  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  ${Media.MD} {
    width: 70%;
  }
`;

const ButtonForm = styled(StyledButton)`
  width: 20%;

  ${Media.MD} {
    width: 30%;
  }
`;

export { StyledSubscription, Form, ButtonForm, Text, Input };
