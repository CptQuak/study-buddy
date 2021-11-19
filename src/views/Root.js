import React from 'react';
import { Wrapper } from './Root.styles';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainTemplate from 'components/template/MainTemplate/MainTemplate';
import Dashboard from '../components/template/Dashboard/Dashboard';
// import AddUser from './AddUser';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
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

const UnAuthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(auth.signIn)}>
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
    </form>
  );
};

const Root = () => {
  const auth = useAuth();
  return auth.user ? <AuthenticatedApp /> : <UnAuthenticatedApp />;
};

export default Root;
