import PropTypes from 'prop-types';
import { Button } from '../../atoms/Button/Button';
import { StyledAvarage, StyledInfo, Wrapper } from './UsersListItem.styled';

const UsersListItem = ({
  userData: { average, name, attendance = '0%' },
  deleteUser,
}) => {
  return (
    <Wrapper>
      <StyledAvarage value={average}>{average}</StyledAvarage>
      <StyledInfo>
        <p>
          {name}
          <Button onClick={() => deleteUser(name)} />
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
