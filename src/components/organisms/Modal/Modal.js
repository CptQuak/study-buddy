import { Button } from 'components/atoms/Button/Button';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalWrapper, FadedBG } from './Modal.styled';
const modalContainer = document.getElementById('modal-container');
const Modal = ({ handleClose, children, buttonContent = 'Close window' }) => {
  const modalNode = document.createElement('div');
  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => modalContainer.removeChild(modalNode);
  }, []);

  return ReactDOM.createPortal(
    <FadedBG>
      <ModalWrapper>
        {children}
        <Button onClick={handleClose}>{buttonContent}</Button>
      </ModalWrapper>
    </FadedBG>,
    modalNode
  );
};

export default Modal;
