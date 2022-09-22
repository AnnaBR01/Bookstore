import styled from "styled-components";
import { Color, Media } from "../../../ui";

const WrapperHeader = styled.div`
  z-index: 2;
  background: ${Color.Light};
  position: sticky;
  top: 0;
`;

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 20% 55% 5% 20%;
  align-items: center;
  padding-block: 28px;
  border-bottom: 1px solid ${Color.Secondary};

  ${Media.LG} {
    grid-template-columns: none;
    display: flex;
    justify-content: end;
    align-items: center;
  }
`;

const ButtonLogo = styled.button`
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ButtonTheme = styled.button`
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;

  :hover {
    box-shadow: 1px 1px 15px ${Color.Gray};
  }

  ${Media.LG} {
    margin-left: auto;
  }
`;

const List = styled.ul`
  justify-self: end;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  ${Media.LG} {
    grid-template-columns: none;
    margin-inline: 10px;
  }
`;

const Item = styled.li`
  align-self: center;
`;

const ButtonFavorites = styled.button`
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;

  ${Media.LG} {
    display: none;
  }
`;

const ButtonCart = styled.button`
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;
`;

const ButtonUser = styled.button`
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;

  ${Media.LG} {
    display: none;
  }
`;

const ButtonBurger = styled.button`
  padding: 12px;
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  :hover {
    box-shadow: 1px 1px 15px ${Color.Gray};
  }

  ${Media.LG} {
    display: flex;
  }
`;

export {
  StyledHeader,
  ButtonLogo,
  ButtonTheme,
  List,
  Item,
  ButtonFavorites,
  ButtonCart,
  ButtonUser,
  ButtonBurger,
  WrapperHeader,
};
