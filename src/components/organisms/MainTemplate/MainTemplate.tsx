import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, Rewiews } from "components";
import { AnimatePresence } from "framer-motion";
import { useToggle } from "hooks";
import { Container } from "ui";
import { StyledMainTemplate, StyledOutlet } from "./styles";

export const MainTemplate = () => {
  const [isOpenRewiews, toggleIsOpenRewiews] = useToggle();

  useEffect(() => {
    const handler = setTimeout(() => {
      toggleIsOpenRewiews();
    }, 240000);
    return () => clearTimeout(handler);
  }, [toggleIsOpenRewiews]);

  return (
    <StyledMainTemplate>
      <AnimatePresence>
        {isOpenRewiews && <Rewiews toggleIsOpenRewiews={toggleIsOpenRewiews} />}
      </AnimatePresence>

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
