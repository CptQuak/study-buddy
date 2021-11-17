import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import UsersList from 'components/organisms/UsersList/UsersList';
import PropTypes from 'prop-types';
import { useParams, Navigate } from 'react-router-dom';
import { UserShape } from 'types';
import {
  DashboardGroupInfo,
  DashboardNavbarWrapper,
  StyledLink,
} from './Dashboard.styled';
import { useStudents } from 'hooks/useStudents';
import { useState, useEffect } from 'react';
import useModal from 'hooks/useModal';
import { Title } from 'components/atoms/Title/Title';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const { id } = useParams();
  const { getGroups, getStudentById } = useStudents();
  const { Modal, isOpen, handleCloseModal, handleOpenModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    // setCurrentUser(id);
    const student = await getStudentById(id);
    setCurrentUser(student);
    handleOpenModal();
  };

  if (!id && groups.length > 0) return <Navigate to={`/group/${groups[0]}`} />;
  return (
    <>
      <DashboardNavbarWrapper>
        <DashboardGroupInfo>Group {id || groups[0]}</DashboardGroupInfo>
        {groups.map((group) => (
          <StyledLink key={group} to={`/group/${group}`}>
            {group}
          </StyledLink>
        ))}
      </DashboardNavbarWrapper>
      <ViewWrapper>
        <UsersList handleOpenStudentDetails={handleOpenStudentDetails} />
        {isOpen ? (
          <Modal handleClose={handleCloseModal}>
            {/* <StudentDetails student={currentUser} /> */}
            <p>pan pe</p>
          </Modal>
        ) : null}
      </ViewWrapper>
    </>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
