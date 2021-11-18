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
import Dashboard from '../components/template/Dashboard/Dashboard';
import AddUser from './AddUser';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Wrapper>
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate replace to="/group/" />}
          ></Route>
          <Route path="/group/:id" element={<Dashboard />}></Route>
          <Route path="/group" element={<Dashboard />}></Route>
        </Routes>
      </Wrapper>
    </MainTemplate>
  );
};

const UnAuthenticatedApp = ({ handleSignIn, loginError }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(handleSignIn)}>
      <FormField
        label="Login"
        name="login"
        id="login"
        {...register('login', { required: true })}
      />
      {errors.login && <span>Login is required</span>}
      <FormField
        label="Password"
        name="pass"
        id="pass"
        type="password"
        {...register('password', { required: true })}
      />
      {errors.password && <span>Password is required</span>}
      <Button type="submit">Sign in</Button>
      {loginError && <span>{loginError}</span>}
    </form>
  );
};

const Root = () => {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const token = localStorage.getItem('__be_token__');
    console.log(token);
    if (token) {
      (async () => {
        try {
          const res = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          console.log(res.data);
          setUser(res.data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);
  const handleSignIn = async ({ login, password }) => {
    try {
      const res = await axios.post('/login', {
        login,
        password,
      });
      setUser(res.data);
    } catch (e) {
      setError('Provide valid user data');
    }
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {user ? (
          <AuthenticatedApp />
        ) : (
          <UnAuthenticatedApp loginError={error} handleSignIn={handleSignIn} />
        )}
      </ThemeProvider>
    </Router>
  );
};

export default Root;
