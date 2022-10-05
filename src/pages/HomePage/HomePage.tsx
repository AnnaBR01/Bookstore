import { NewBooksContent, Subscription } from "components";
import { StyledHomePage } from "./styles";

export const HomePage = () => {
  return (
    <StyledHomePage>
      <NewBooksContent />
      <Subscription />
    </StyledHomePage>
  );
};
