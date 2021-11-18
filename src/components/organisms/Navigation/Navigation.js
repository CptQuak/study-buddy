import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study <br /> Buddy
        </h1>
      </Logo>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink
        as="a"
        onClick={() => localStorage.removeItem('__be_token__')}
      >
        Logout
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
