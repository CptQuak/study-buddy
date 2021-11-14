import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const SearchBarWrapper = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
`;
export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-right: 40px;
  p {
    margin: 5px 0;
  }
`;
export const SearchInputWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  position: relative;
`;
export const SearchInput = styled(Input)`
  font-size: ${({ theme }) => theme.fontSize.l};
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  padding-left: 20px;
`;

export const SearchContent = styled.ul`
  z-index: 1000;
  max-height: 500px;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 15px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  top: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.darkGrey};
  li {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGrey};
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    padding: 20px 5px;
  }
  li:hover,
  li:focus {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
  li:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }
`;
