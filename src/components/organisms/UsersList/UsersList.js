import PropTypes from 'prop-types';
import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import { UserShape } from 'types';
import { useParams } from 'react-router';
import { useStudents } from 'hooks/useStudents';
import { useState, useEffect } from 'react';

const UsersList = ({ handleOpenStudentDetails }) => {
  const [students, setStudents] = useState([]);

  const { id } = useParams();
  const { getStudentsByGroup } = useStudents();
  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      setStudents(students);
    })();
  }, [getStudentsByGroup, id]);
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem
            onClick={() => handleOpenStudentDetails(userData.id)}
            key={userData.name}
            userData={userData}
          />
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
