import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.grey};
  border: none;
  border-radius: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Button = () => (
  <StyledButton>
    <AiOutlineCloseCircle />
  </StyledButton>
);
