import { users as usersData } from 'data/users';
import React, { useState, useEffect } from 'react';
import UsersListItem from '../../molecules/UsersListItem/UsersListItem';
import { StyledList, Wrapper } from './UserList.styled';

const mockAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Erorr' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState(true);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };
  useEffect(() => {
    mockAPI()
      .then((data) => {
        setUsers(data);
        setLoadingState(false);
      })
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users list'}</h1>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem
            deleteUser={deleteUser}
            key={userData.name}
            userData={userData}
          />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
