import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MainTemplate from 'components/template/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import AddUser from './AddUser';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route
                exact
                path="/"
                element={<Navigate replace to="/group" />}
              ></Route>
              <Route path="/add-user" element={<AddUser />}></Route>
              <Route path="/group/:id" element={<Dashboard />}></Route>
              <Route path="/group" element={<Dashboard />}></Route>
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
