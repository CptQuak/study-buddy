import Navigation from 'components/organisms/Navigation/Navigation';
import React from 'react';
import { Wrapper } from './MainTemplate.styled';
const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
