import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-row: 2/2;
  grid-column: 2/3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;
