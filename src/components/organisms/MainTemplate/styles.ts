import styled from "styled-components";
import { Color, Media } from "../../../ui";

const StyledMainTemplate = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const WrapperHeader = styled.div`
  background: ${Color.Light};
  position: sticky;
  top: 0;
`;

const WrapperFooter = styled.div`
  background: ${Color.Light};
  position: sticky;
  bottom: 0;
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  ${Media.MD} {
    padding-inline: 40px;
  }

  ${Media.SM} {
    padding-inline: 24px;
  }
`;

const StyledOutlet = styled.div`
  flex-grow: 1;
`;

export {
  StyledMainTemplate,
  WrapperHeader,
  WrapperFooter,
  Container,
  StyledOutlet,
};
