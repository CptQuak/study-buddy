import axios from 'axios';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserShape } from 'types';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((e) => console.log(e));
  }, []);
  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => {
        setStudents(data.students);
      })
      .catch((e) => console.log(e));
  }, [id, groups]);
  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => (
          <Link key={group} to={`/group/${group}`}>
            {group}
          </Link>
        ))}
      </nav>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
