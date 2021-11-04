import PropTypes from 'prop-types';
import { Button } from '../../atoms/Button/Button';
import { StyledAvarage, StyledInfo, Wrapper } from './UsersListItem.styled';

const showIndex = (index) => alert(`This is student #${index + 1}`);

const UsersListItem = ({
  index,
  userData: { average, name, attendance = '0%' },
}) => {
  return (
    <Wrapper>
      <StyledAvarage value={average}>{average}</StyledAvarage>
      <StyledInfo>
        <p>
          {name}
          <Button onClick={() => showIndex(index)} />
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
