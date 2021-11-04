import PropTypes from 'prop-types';
import styled from 'styled-components';
const determineBackgroundColor = (grade) => {
  if (grade < 3) {
    return 'error';
  } else if (grade >= 3 && grade < 4) {
    return 'warning';
  } else {
    return 'success';
  }
};
const StyledGrade = styled.div`
  background-color: ${({ grade, theme }) => {
    const themeColor = determineBackgroundColor(grade);
    return theme.colors[themeColor];
  }};
  padding: 0.5rem;
  border-radius: 50%;
  height: 100%;
`;

const Grade = ({ grade }) => {
  determineBackgroundColor(grade);
  return <StyledGrade grade={grade}>{grade}</StyledGrade>;
};

Grade.propTypes = {};

export default Grade;
