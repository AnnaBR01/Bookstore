import styled from "styled-components";
import { Color, Media } from "../../../ui";

const StyledBurgerMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  ${Media.MD} {
    display: block;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(2px);
    position: absolute;
    transition: all 1s ease 0s;
    top: ${({ $isOpen }) => ($isOpen ? `0` : `-100%`)};
  }
`;

const WrapperContent = styled.div`
  box-shadow: 1px 1px 15px ${Color.Green};
  margin-left: auto;
  width: 50%;
  background: ${Color.Light};
  display: grid;
  align-content: flex-start;
  grid-gap: 25%;
  padding-inline: 40px;
  height: inherit;

  ${Media.SM} {
    width: 100%;
  }
`;

const BurgerHeader = styled.div`
  padding-block: 35px;
  border-bottom: 1px solid ${Color.Secondary};
  display: flex;
  justify-content: end;

  ${Media.MD} {
    width: 100%;
  }
`;

export { StyledBurgerMenu, WrapperContent, BurgerHeader };
