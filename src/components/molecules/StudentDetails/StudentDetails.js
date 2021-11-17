import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import { StyledAverage } from '../UsersListItem/UsersListItem.styles';
import {
  Wrapper,
  ModalHeader,
  InnerWrapper,
  CourseInfo,
  GradeInfo,
  GradesInfo,
} from './StudentDetails.styled';

const StudentDetails = ({ student }) => {
  return (
    <Wrapper>
      <ModalHeader>
        <StyledAverage value={student.average}>{student.average}</StyledAverage>
        <Title>{student.name}</Title>
        <DeleteButton />
      </ModalHeader>
      <InnerWrapper>
        <CourseInfo>
          <h3>Course:</h3>
          <p>{student.course}</p>
        </CourseInfo>
        <GradesInfo>
          <h3>Average grades:</h3>
          {student.subjects.map((subject) => (
            <GradeInfo>
              <p>{subject.name}</p>
              <StyledAverage value={subject.grade}>
                {subject.grade}
              </StyledAverage>
            </GradeInfo>
          ))}
        </GradesInfo>
      </InnerWrapper>
    </Wrapper>
  );
};

export default StudentDetails;
