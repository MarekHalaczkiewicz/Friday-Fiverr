import React, { useState } from 'react';
import './Modal.css';
import { useHistory } from 'react-router-dom';

function Modal({ setModalOpen, project }) {
  const { title, media, body, goal, skills, tags, location, organization } =
    project;
  const history = useHistory();
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalContainerLeft">
          <div className="title">
            <h2>{title}</h2>
          </div>
          <div className="media">
            <img className="img" src={media} alt="Project" />
          </div>
          <div className="bodyLeft">
            <p>{body}</p>
            <p>
              <strong>Location: </strong>
              {location}
            </p>
            <p>
              <strong>organization: </strong>
              {organization}
            </p>
          </div>
          <div className="footerLeft">
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
          </div>
        </div>
        <div className="modalContainerRight">
          <div className="titleCloseBtn">
            <button
              className="X"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              X
            </button>
          </div>
          <div className="donation">
            <div className="title">
              <h2>The way you can help</h2>
            </div>
            <div className="bodyRight">
              <p>
                If you want to help your neighborhood community, there are other
                ways than a donation. If your skillsets are matching the ones
                needed for this project you can help by showing up and put them
                to work. Thanks to the special project of Fiverr, by helping
                others, you will help yourself and made your account more
                visible for people looking for freelancers, or even get more
                stars! Just click on "Take Part" button, and fill out the help
                form
              </p>
              <p>
                <strong>Goal: </strong>
                {goal}€
              </p>
              <p>
                <strong>Skills needed: </strong>
                {skills.map((skill) => {
                  return skill;
                })}
              </p>
              <p>
                <strong>tags: </strong>
                {tags}
              </p>
            </div>
            <div className="footerRight">
              <button
                id="donation-btn"
                onClick={() => history.push('/donate')}
              >
                Donation
              </button>
              <button id="join-btn" onClick={() => history.push('/subscribe')}>
                Take part
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
