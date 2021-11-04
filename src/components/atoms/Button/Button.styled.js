import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 24px;
  height: 24px;
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
