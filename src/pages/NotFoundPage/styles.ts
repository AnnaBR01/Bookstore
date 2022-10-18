import styled from "styled-components";
import { H1, H3, Media, Color } from "ui";

const StyledNotFoundPage = styled.div`
  display: grid;
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
  margin-block: 72px;

  ${Media.MD} {
    margin-block: 56px;
  }
`;

const Image = styled.img`
  width: 300px;
  margin-top: 20px;

  ${Media.MD} {
    width: 200px;
  }
`;

const Title = styled.h3`
  text-align: center;
  ${H1}
`;

const Subtitle = styled.h3`
  text-align: center;
  ${H3}
  color: ${Color.Secondary}
`;

export { StyledNotFoundPage, Image, Subtitle, Title };
