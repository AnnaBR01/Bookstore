import { useEffect } from "react";
import { StyledWelcomePage } from "./styles";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes";
import { Welcome } from "assets";

export const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = setTimeout(() => {
      navigate(ROUTE.HOME);
    }, 4000);
    return () => clearTimeout(handler);
  }, [navigate]);

  return (
    <StyledWelcomePage
      animate={{
        opacity: 0,
        transition: {
          delay: 1,
          duration: 3,
        },
      }}
    >
      <Welcome />
    </StyledWelcomePage>
  );
};
