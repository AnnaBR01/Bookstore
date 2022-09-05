import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

const StyledMainTemplate = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  background: ${Color.Light};
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

export { StyledMainTemplate, Wrapper, Container, StyledOutlet };
