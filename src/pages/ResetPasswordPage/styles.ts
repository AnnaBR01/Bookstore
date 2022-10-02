import styled from "styled-components";
import { StyledButton } from "../../components/atoms/Button/styles";
import { Color, H3, Media, BODY2 } from "../../ui";

const StyledResetPasswordPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  padding: 40px 32px;
  margin: 274px auto 283px;
  border: 2px solid ${Color.Secondary};

  ${Media.LG} {
    margin: 240px auto;
  }

  ${Media.MD} {
    margin: 56px auto 224px;
    border: none;
    padding: 0;
  }
`;

const ResetTitle = styled.p`
  margin-bottom: 32px;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: ${Color.Primary};
`;

const Form = styled.form`
  display: grid;
  grid-gap: 40px;

  ${Media.MD} {
    grid-gap: 32px;
  }
`;

const Error = styled.p`
  ${H3}
  color: ${Color.Red}
`;

const ButtonForm = styled(StyledButton)``;

const ButtonHome = styled(StyledButton)`
  margin-top: 40px;

  ${Media.MD} {
    margin-top: 32px;
  }
`;

const Text = styled.p`
  margin-bottom: 32px;
  padding: 20px;
  ${BODY2}
  font-weight: 400;
  background: ${Color.Purple};

  ${Media.MD} {
    margin-bottom: 24px;
  }
`;

const Email = styled.span`
  ${BODY2}
`;

export { StyledResetPasswordPage, ResetTitle, Form, Error, ButtonForm, ButtonHome, Text, Email };
