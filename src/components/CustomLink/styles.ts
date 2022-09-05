import { PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledCustomLink = styled.div<{ $active: PathMatch<string> | null }>`
  box-shadow: ${({ $active }) =>
    $active ? `1px 1px 10px rgba(0, 0, 0, 0.1)` : `none`};
`;

export { StyledCustomLink };
