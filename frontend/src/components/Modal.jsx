import React, { useState, useContext, useEffect } from 'react';
import './Modal.css';
import UserContext from '../UserContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import ReactPlayer from 'react-player';

function Modal({ index, setModalOpen, project, projectList, setProjectList }) {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const {
    _id,
    title,
    media,
    description,
    goal,
    skills,
    video,
    location,
    organization,
  } = project;

  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const tempTotal = project.contributors.reduce(
      (total, obj) => (obj.amount ? obj.amount + total : total),
      0
    );
    setTotal(tempTotal);
    console.log(tempTotal);
  }, [projectList]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bodyReq = {
      userId: user.id,
      amount,
    };

    await axios
      .post(`http://localhost:8000/api/projects/${_id}/contribute`, bodyReq)
      .then((response) => {
        console.log(response.data);
      });

    await axios.get('http://localhost:8000/api/projects').then((result) => {
      console.log(projectList);
      setProjectList(result.data);
      console.log(projectList);
    });

    // const response = await axios.post(
    //   `http://localhost:8000/api/projects/${projectId}/contribute`,
    //   bodyReq
    // );
    // let updatedProjectList = [...projectList];
    // updatedProjectList[index].contributions = response.data;
    // setProjectList(updatedProjectList);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalContainerLeft">
          <div className="title">
            <h2>{title}</h2>
          </div>
          {video ? (
            <ReactPlayer
              url={`http://localhost:8000/public/${video}`}
              controls={false}
              height="40%"
              muted={true}
              playing={true}
              loop={true}
            />
          ) : (
            <div className="media">
              <img className="img" src={media} alt="Project" />
            </div>
          )}
          <div className="bodyLeft">
            <p>{description}</p>
            <p>
              <strong>Organization: </strong>
              {organization.name}
            </p>
            <p>
              <strong>Location: 🇩🇪</strong>
              {location}
            </p>
          </div>
          <div className="footerLeft">
            <button
              onClick={() => {
                setModalOpen(false);
              }}
              id="cancelBtn"
            >
              Back
            </button>
          </div>
        </div>
        <div className="modalContainerRight">
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
                stars! Just click on the "Take Part" button, and fill out the
                help form
              </p>
              <p>
                <strong>Skills needed: </strong>
                {skills.map((skill) => {
                  return skill;
                })}
              </p>
              <p>
                <strong>Goal: </strong>
                {goal}€
              </p>
              <p>{`${total} / ${goal}€`}</p>
              <ProgressBar
                bgcolor={'#6a1b9a'}
                completed={Math.floor((total / goal) * 100)}
              />
              {/* <p>
                <strong>tags: </strong>
                {tags.map((tag) => {
                  return tag;
                })}
              </p> */}
            </div>
            <form onSubmit={handleSubmit}>
              <label>
                <strong>Amount: </strong>
                <input
                  className="input"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </label>
              <div className="footerRight">
                <button id="donation-btn" type="submit">
                  Donation
                </button>
                <button
                  id="join-btn"
                  onClick={() => history.push('/subscribe')}
                >
                  Take part
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
