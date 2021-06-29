import React from "react";
import "./Modal.css";

function Modal({ setModalOpen, project }) {
  const { title, media, body, goal, skills, tags, location, organization } =
    project;
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalContainerLeft">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <div className="media">
            <img className="img" src={media} alt="Project Image" />
          </div>
          <div className="body">
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
              onClick={() => {
                setModalOpen(false);
              }}
            >
              X
            </button>
          </div>
          <div className="donation">
            <div className="title">
              <h1>The way you can help</h1>
            </div>
            <div className="body">
              <h3>
                If you want to help your neighborhood community, there are other
                ways than a donation. If your skillsets are matching the ones
                needed for this project you can help by showing up and put them
                to work. Thanks to the special project of Fiverr, by helping
                others, you will help yourself and made your account more
                visible for people looking for freelancers, or even get more
                stars! Just click on "Take Part" button, and fill out the help
                form
              </h3>
              <p>
                <strong>Goal: </strong>
                {goal}€
              </p>
              <p>
                <strong>Skills needed: </strong>
                {/* {skills.map((skill) => {
                  return { skill };
                })} */}
              </p>
              <p>
                <strong>tags: </strong>
                {tags}
              </p>
            </div>
            <div className="footerRight">
              <button id="donation-btn">Donation</button>
              <button id="join-btn">Take part</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
