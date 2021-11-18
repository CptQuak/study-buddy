import { Button } from 'components/atoms/Button/Button';
import React from 'react';
import { ModalWrapper } from './Modal.styled';
const Modal = ({
  handleClose,
  isOpen,
  children,
  buttonContent = 'Close window',
}) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      {children}
      <Button onClick={handleClose}>{buttonContent}</Button>
    </ModalWrapper>
  );
};

export default Modal;
