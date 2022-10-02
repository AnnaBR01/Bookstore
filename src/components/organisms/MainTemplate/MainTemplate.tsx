import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useToggle } from "../../../hooks";
import { Container } from "../../../ui";
import { Footer, Header, Rewiews } from "../../index";

import { StyledMainTemplate, StyledOutlet } from "./styles";

export const MainTemplate = () => {
  const [isOpenRewiews, toggleIsOpenRewiews] = useToggle();

  useEffect(() => {
    const handler = setTimeout(() => {
      toggleIsOpenRewiews();
    }, 50000);
    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
