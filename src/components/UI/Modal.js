import React from 'react';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';
import ModalBox from './ModalBox';

const Modal = (props) => {
  const portalDestination = document.getElementById('modals');

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalDestination
      )}
      {ReactDOM.createPortal(
        <ModalBox>{props.children}</ModalBox>,
        portalDestination
      )}
    </React.Fragment>
  );
};

export default Modal;
