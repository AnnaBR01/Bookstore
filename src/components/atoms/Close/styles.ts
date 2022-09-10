import styled from "styled-components";
import { closeIcon } from "../../../assets";
import { Color, Icon } from "../../../ui";

const StyledClose = styled.button`
  ${Icon}
  background-image: url(${closeIcon});
  background-size: 50%;
  height: 56px;
  width: 56px;

  :hover {
    box-shadow: 1px 1px 15px ${Color.Green};
  }
`;

export { StyledClose };
