import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  gap: 0.5rem;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
const determineBackgroundColor = (grade) => {
  if (grade < 3) {
    return 'error';
  } else if (grade >= 3 && grade < 4) {
    return 'warning';
  } else {
    return 'success';
  }
};
export const StyledAvarage = styled.div`
  background-color: ${({ value, theme }) => {
    const themeColor = determineBackgroundColor(value);
    return theme.colors[themeColor];
  }};
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const StyledInfo = styled.div`
  padding: 25px 20px;
  p {
    margin: 0;
  }
  p:first-child {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.grey};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
`;
