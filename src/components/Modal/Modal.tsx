import React from 'react';
import { createPortal } from 'react-dom';
import { ITodo } from 'types';

interface ModalProps {
  isOpen: boolean;
  onCloseModal: () => void;
  content: ITodo;
}

const Modal: React.FC<ModalProps> = (props) => {
  const modal = (
    <>
      <div className="backdrop">
        <div className="modal">
          <h2 className="modal-title">{props.content.title}</h2>
          <p className="modal-descr">Description:</p>
          <p className="modal-text">{props.content.text}</p>
          <div className="modal-status">
            <span>Status: </span>
            <input type="checkbox" defaultChecked={props.content.status} />
          </div>
          <button onClick={props.onCloseModal}>close</button>
        </div>
      </div>
    </>
  );

  return props.isOpen ? createPortal(modal, document.body) : null;
};

export default Modal;
