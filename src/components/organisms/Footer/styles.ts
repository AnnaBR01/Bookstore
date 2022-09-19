import styled from "styled-components";
import { Color, Media } from "../../../ui";

const WrapperFooter = styled.div`
  background: ${Color.Light};
  position: sticky;
  bottom: 0;

  ${Media.LG} {
    position: static;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 26px;
  border-top: 1px solid ${Color.Secondary};

  ${Media.MD} {
    padding-block: 25px;
    flex-direction: column;
  }
`;

const FooterDescription = styled.p`
  line-height: 24px;
  color: ${Color.Secondary};

  ${Media.MD} {
    line-height: 36px;
  }
`;

export { WrapperFooter, StyledFooter, FooterDescription };
