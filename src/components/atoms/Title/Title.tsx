import { StyledTitle } from "./styles";

interface IProps {
  value: string;
}

export const Title = ({ value }: IProps) => {
  return <StyledTitle>{value}</StyledTitle>;
};
