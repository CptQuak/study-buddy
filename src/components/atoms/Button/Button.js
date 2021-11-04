import { AiOutlineCloseCircle } from 'react-icons/ai';
import { StyledButton } from './Button.styled';

export const Button = (props) => (
  <StyledButton {...props}>
    <AiOutlineCloseCircle />
  </StyledButton>
);
