import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
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
