import styled from "styled-components";
import { BODY2, Media, Color } from "../../../ui";

const StyleTabBar = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 49px;
  border-bottom: 1px solid ${Color.Gray};

  ${Media.MD} {
    margin-bottom: 37px;
  }
`;

const Button = styled.button<{ $isActiveDescription?: boolean; $isActiveAuthors?: boolean }>`
  padding: 0 40px 24px;
  ${BODY2}
  font-weight: 400;
  background: none;
  border: none;
  border-bottom: ${({ $isActiveDescription }) =>
    $isActiveDescription && `1px solid ${Color.Primary}`};
  border-bottom: ${({ $isActiveAuthors }) => $isActiveAuthors && `1px solid ${Color.Primary}`};
  cursor: pointer;

  ${Media.MD} {
    padding: 0 24px 24px;
  }
`;

export { StyleTabBar, Button };
