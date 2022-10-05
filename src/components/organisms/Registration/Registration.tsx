import { Outlet } from "react-router-dom";
import { RegistrationCustomLink } from "components";
import { ROUTE } from "routes";
import { Button, ButtonWrapper, StyledRegistration } from "./styles";

export const Registration = () => {
  return (
    <StyledRegistration>
      <ButtonWrapper>
        <RegistrationCustomLink to={ROUTE.SIGN_IN}>
          <Button>Sign in</Button>
        </RegistrationCustomLink>

        <RegistrationCustomLink to={ROUTE.SIGN_UP}>
          <Button>Sign up</Button>
        </RegistrationCustomLink>
      </ButtonWrapper>

      <Outlet />
    </StyledRegistration>
  );
};
