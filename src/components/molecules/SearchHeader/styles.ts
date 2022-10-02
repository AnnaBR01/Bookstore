import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media, H3 } from "../../../ui";

const Search = styled.div`
  justify-self: center;
  padding: 12px 16px 12px 20px;
  border: 1px solid ${Color.Secondary};
  min-width: 542px;
  display: flex;
  justify-content: space-between;

  ${Media.LG} {
    min-width: 287px;
    width: 100%;
  }

  ${Media.MD} {
    min-width: 271px;
  }
`;

const SearchInput = styled.input`
  min-width: 480px;
  border: none;
  outline: none;
  color: ${Color.Secondary};
  background: ${Color.Light};
  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  :focus {
    color: ${Color.Primary};
  }

  ${Media.LG} {
    min-width: 225px;
  }

  ${Media.MD} {
    min-width: 200px;
  }
`;

const ButtonSearch = styled.button`
  display: flex;
  align-content: center;
  background: none;
  border: none;
  cursor: pointer;
`;

const SearchListWrapper = styled(motion.div)`
  position: absolute;
  top: 90px;
  left: 20%;
  z-index: 2;
  display: grid;
  align-content: center;
  min-width: 55%;
  height: 50vh;
  background: ${Color.White};
  border: 1px solid ${Color.Gray};
  overflow-y: scroll;
`;

const SearchList = styled.ul`
  display: grid;
`;

const SearchCard = styled.li`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid ${Color.Gray};
`;

const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  padding: 0 14px;
  margin-right: 16px;
  background: ${Color.Blue};
`;

const Image = styled.img`
  max-width: 50px;
  width: 100%;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 32px;
`;

const Message = styled.p`
  text-align: center;
  ${H3}
`;

const Word = styled.span`
  color: ${Color.Red};
`;

const StyledError = styled.div`
  align-self: center;
  margin-top: 20%;
`;

export {
  Search,
  ButtonSearch,
  SearchInput,
  SearchList,
  SearchCard,
  WrapperImage,
  Image,
  Title,
  SearchListWrapper,
  Message,
  Word,
  StyledError,
};
