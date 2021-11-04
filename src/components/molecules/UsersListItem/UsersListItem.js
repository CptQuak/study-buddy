import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '../../atoms/Button/Button';
import Grade from '../../atoms/Grade/Grade';
const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  gap: 2rem;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  return (
    <Wrapper>
      <Grade grade={average} />
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <Button />
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
