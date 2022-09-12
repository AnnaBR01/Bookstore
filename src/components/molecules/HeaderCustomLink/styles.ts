import { PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../../ui";

const StyledCustomLink = styled.div<{ $active: PathMatch<string> | null }>`
  box-shadow: ${({ $active }) =>
    $active ? `1px 1px 15px ${Color.Green}` : `none`};
`;

export { StyledCustomLink };
