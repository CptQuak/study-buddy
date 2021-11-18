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
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const { id } = useParams();
  const { getGroups, getStudentById } = useStudents();
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      console.log(groups);
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    // setCurrentUser(id);
    const student = await getStudentById(id);
    setCurrentUser(student);
    handleOpenModal();
  };

  if (!id && groups.length > 0)
    return <Navigate to={`/group/${groups[0].id}`} />;
  return (
    <>
      <DashboardNavbarWrapper>
        <DashboardGroupInfo>Group {id || groups[0]}</DashboardGroupInfo>
        {groups.map(({ id }) => (
          <StyledLink key={id} to={`/group/${id}`}>
            {id}
          </StyledLink>
        ))}
      </DashboardNavbarWrapper>
      <ViewWrapper>
        <UsersList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isOpen} handleClose={handleCloseModal}>
          <StudentDetails student={currentUser} />
        </Modal>
      </ViewWrapper>
    </>
  );
};

Dashboard.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default Dashboard;
