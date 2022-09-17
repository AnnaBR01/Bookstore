import { Outlet } from "react-router-dom";
import { Container } from "../../../ui";
import { Footer, Header } from "../../index";
import { StyledMainTemplate, StyledOutlet } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Header />

      <StyledOutlet>
        <Container>
          <Outlet />
        </Container>
      </StyledOutlet>

      <Footer />
    </StyledMainTemplate>
  );
};
