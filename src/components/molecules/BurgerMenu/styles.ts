import styled from "styled-components";
import { Color, Media } from "../../../ui";

const StyledBurgerMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  left: 0;
  top: ${({ $isOpen }) => ($isOpen ? `0` : `-100%`)};
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(2px);
`;

const WrapperContent = styled.div`
  display: grid;
  align-content: start;
  grid-gap: 13%;
  grid-template-rows: repeat(auto-fill, 1fr);
  width: 50%;

  height: inherit;
  margin-left: auto;
  margin-right: 40px;
  padding-inline: 40px;
  background: ${Color.Light};
  box-shadow: 1px 1px 15px ${Color.Gray};

  ${Media.MD} {
    width: 100%;
  }
`;

const BurgerHeader = styled.div`
  display: flex;
  justify-content: end;
  padding-block: 35px;
  border-bottom: 1px solid ${Color.Secondary};

  ${Media.LG} {
    width: 100%;
  }
`;

const Description = styled.p`
  text-align: center;
  font-family: "Bebas Neue";
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
`;

export { StyledBurgerMenu, WrapperContent, BurgerHeader, Description };
