import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../index";
import {
  Container,
  StyledMainTemplate,
  StyledOutlet,
  WrapperHeader,
  WrapperFooter,
} from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <WrapperHeader>
        <Container>
          <Header />
        </Container>
      </WrapperHeader>
      <StyledOutlet>
        <Container>
          <Outlet />
        </Container>
      </StyledOutlet>
      <WrapperFooter>
        <Container>
          <Footer />
        </Container>
      </WrapperFooter>
    </StyledMainTemplate>
  );
};
