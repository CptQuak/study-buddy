import { users } from 'data/users';
import UsersListItem from '../UsersListItem/UsersListItem';

const UsersList = (props) => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
