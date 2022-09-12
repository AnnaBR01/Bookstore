import styled from "styled-components";
import { BODY2, Color, H3, Media } from "../../../ui";

const StyledBookCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const WrapperImage = styled.div`
  height: auto;
  padding: 1px 63px;
  margin-bottom: 20px;
  background: ${Color.Blue};

  ${Media.MD} {
    padding: 0 59px;
  }

  ${Media.SM} {
    padding: 0 49px;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const BookName = styled.h3`
  margin-bottom: 8px;
  ${H3}
`;

const BookDescription = styled.p`
  margin-bottom: 40px;
  color: ${Color.Secondary};
  ${BODY2};
`;

const Price = styled.h3`
  ${H3};
`;

export {
  StyledBookCard,
  WrapperImage,
  Image,
  BookName,
  BookDescription,
  Price,
};
