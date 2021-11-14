import PropTypes from 'prop-types';
import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';
import { useParams } from 'react-router';
import { useStudents } from 'hooks/useStudents';

const UsersList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};
UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};
export default UsersList;
