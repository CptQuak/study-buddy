import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  padding: 1rem;
  ${Button} {
    padding: 0.7rem 3.5rem;
  }
  &:focus {
    outline: none;
  }
`;
