import styled from 'styled-components';
import { StyledAverage } from '../UsersListItem/UsersListItem.styles';
export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${StyledAverage} {
    width: 60px;
    height: 60px;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
export const InnerWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
export const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
export const GradesInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
export const GradeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkPurple};
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
