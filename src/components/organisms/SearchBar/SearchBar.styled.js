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

export const SearchContent = styled.div``;
