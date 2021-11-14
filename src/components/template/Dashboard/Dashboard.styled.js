import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DashboardNavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  margin-top: 24px;
`;
export const StyledLink = styled(Link)`
  height: 100%;
  width: 37px;
  margin-right: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.darkGrey};
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
  &:last-child {
    margin-right: 0px;
  }
`;
export const DashboardGroupInfo = styled.h2`
  margin: 0 24px 0 0;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
