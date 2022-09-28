import styled from "styled-components";
import { BODY2, Color, H3, Media } from "../../../ui";

const StyledBookCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 1px 1px 15px ${Color.Gray};
`;

const WrapperImage = styled.div`
  height: auto;
  padding: 1px 63px;
  margin-bottom: 20px;
  background: ${Color.Blue};

  ${Media.LG} {
    padding: 0 59px;
  }

  ${Media.MD} {
    padding: 0 49px;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

const BookName = styled.h3`
  margin-bottom: 8px;
  ${H3}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BookDescription = styled.p`
  margin-bottom: 40px;
  color: ${Color.Secondary};
  ${BODY2};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.h3`
  ${H3};
`;

export { StyledBookCard, WrapperImage, Image, BookName, BookDescription, Price, InfoWrapper };
