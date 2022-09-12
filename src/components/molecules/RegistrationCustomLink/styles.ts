import { PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../../ui";

const StyledCustomLink = styled.div<{ $active: PathMatch<string> | null }>`
  width: 50%;
  color: ${({ $active }) =>
    $active ? `${Color.Primary}` : `${Color.Secondary}`};
  border-bottom: ${({ $active }) =>
    $active ? `2px solid ${Color.Primary}` : `2px solid ${Color.Secondary}`};
`;

export { StyledCustomLink };
