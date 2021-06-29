import React, { useState, useContext } from 'react';
import './Modal.css';
import UserContext from '../UserContext';
import axios from 'axios';

function Modal({ index, setModalOpen, project, projectList, setProjectList }) {
  const { user } = useContext(UserContext);
  const {
    projectId,
    title,
    media,
    body,
    goal,
    skills,
    tags,
    location,
    organiation,
  } = project;

  const [amount, setAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bodyReq = {
      projectId,
      userId: user.userId,
      amount,
    };

    const response = await axios.post(
      `http://localhost:8000/api/projects/${projectId}/contribute`,
      bodyReq
    );
    let updatedProjectList = [...projectList];
    updatedProjectList[index].contributions = response.data;
    setProjectList(updatedProjectList);
  };

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
          <form onSubmit={handleSubmit}>
            <label>
              Amount:
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
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
