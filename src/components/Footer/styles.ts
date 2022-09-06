import styled from "styled-components";
import { Color } from "../../ui/colors";
import { Media } from "../../ui/media";

const StyledInput = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 36px;
  border-top: 1px solid ${Color.Secondary};

  ${Media.MD} {
    min-width: 225px;
  }

  ${Media.SM} {
    padding-block: 40px;
    flex-direction: column;
  }
`;

const FooterDescription = styled.p`
  line-height: 24px;
  color: ${Color.Secondary};
`;

export { StyledInput, FooterDescription };
