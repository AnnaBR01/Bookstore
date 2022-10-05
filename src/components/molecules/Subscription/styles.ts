import styled from "styled-components";
import { Color, Media, S1 } from "ui";

const StyledSubscription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 56px 64px;
  background: ${Color.Purple};

  ${Media.LG} {
    padding: 40px;
  }

  ${Media.MD} {
    padding: 24px;
  }
`;

const Text = styled.p`
  margin-bottom: 32px;
  line-height: 28px;
  color: ${Color.Secondary};

  ${Media.MD} {
    margin-bottom: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;

  ${Media.MD} {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 75%;
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

  ${Media.LG} {
    width: 70%;
  }

  ${Media.MD} {
    width: 100%;
  }
`;

const ButtonForm = styled.button`
  width: 25%;
  color: ${Color.White};
  background: ${Color.Primary};
  border: none;
  padding: 16px 40px;
  ${S1}
  cursor: pointer;

  :hover,
  :active {
    background: ${Color.PrimaryLight};
  }

  :disabled {
    background: ${Color.Secondary};
  }

  ${Media.LG} {
    width: 30%;
  }

  ${Media.MD} {
    width: 100%;
    margin-top: 24px;
  }
`;

export { StyledSubscription, Form, ButtonForm, Text, Input };
