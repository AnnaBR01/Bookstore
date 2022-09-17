import styled from "styled-components";

import { Color, H3 } from "../../../ui";
import { StyledButton } from "../../atoms/Button/styles";

const StyledSignInForm = styled.form`
  display: grid;
  grid-gap: 16px;
`;

const InputError = styled.span`
  color: ${Color.Red};
`;

const ButtonForm = styled(StyledButton)`
  margin-top: 24px;
`;

const Error = styled.p`
  ${H3}
  color: ${Color.Red}
`;

export { StyledSignInForm, InputError, ButtonForm, Error };
