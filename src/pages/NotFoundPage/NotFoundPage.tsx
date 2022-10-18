import { notToFound } from "assets";
import { StyledNotFoundPage, Title, Subtitle, Image } from "./styles";

export const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <Title> There is no such page.</Title>
      <Subtitle>
        Maybe there never was. <br />
        404
      </Subtitle>
      <Image src={notToFound} alt="404" />
    </StyledNotFoundPage>
  );
};
