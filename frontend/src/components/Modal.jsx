import React from 'react';
import './Modal.css';

function Modal({ setModalOpen, project }) {
  console.log();
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setModalOpen(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{project.title}</h1>
        </div>
        <div className="body">
          <p>{project.body}</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setModalOpen(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Donate</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
