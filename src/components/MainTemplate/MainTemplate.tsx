import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Container, StyledMainTemplate, StyledOutlet, Wrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <Wrapper>
        <Container>
          <Header />
        </Container>
      </Wrapper>
      <StyledOutlet>
        <Container>
          <Outlet />
        </Container>
      </StyledOutlet>
      <Wrapper>
        <Container>
          <Footer />
        </Container>
      </Wrapper>
    </StyledMainTemplate>
  );
};
