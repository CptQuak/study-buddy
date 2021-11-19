import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
  grid-row: 1/2;
  grid-column: 0/3;
`;
export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    color: ${({ theme }) => theme.colors.white};
    margin-right: 20px;
    text-align: right;
  }
`;
export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 10px 20px 15px auto;
  position: relative;
  cursor: pointer;
  &.active {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    content: '';
    position: absolute;
    width: 17px;
    height: 3px;
    transform: translateY(-50%);
    top: 50%;
    right: -20px;
    background-color: ${({ theme }) => theme.colors.grey};
    transition: opacity 0.4s ease-in-out;
  }
`;
