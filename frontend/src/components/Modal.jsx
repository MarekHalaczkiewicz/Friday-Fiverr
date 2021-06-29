import React from 'react';
import './Modal.css';

function Modal({ setModalOpen, project }) {
  const { title, media, body, goal, skills, tags, location, organiation } =
    project;
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
          <h1>{title}</h1>
        </div>
        <div className="body">
          <p>{body}</p>
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
