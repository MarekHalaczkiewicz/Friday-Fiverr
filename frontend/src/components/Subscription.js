import React, { useState, useContext } from 'react';
import './submitform.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../UserContext';
import WebcamStreamCapture from './WebcamStreamCapture';

export const Subscription = ({ id, setProjectList, project }) => {
  const [step, setStep] = useState(1);
  // const { user } = useContext(UserContext);
  // const [name, setName] = useState('');
  // const [url, setUrl] = useState('');
  const [skillset, setSkillset] = useState('');
  const [pitch, setPitch] = useState('');
  // const history = useHistory();

  // async function submitForm(e) {
  //   e.preventDefault();
  //   const bodyReq = {
  //     name,
  //     profileURL: url,
  //     skillset,
  //     pitch,
  //     userId: user.id,
  //   };

  //   console.log(id);
  //   console.log(user.id);
  //   await axios
  //     .post(`http://localhost:8000/api/projects/${id}/subscribe`, bodyReq)
  //     .then((response) => {
  //       console.log(response.data);
  //     });
  //   window.alert('Thanks for your application');

  //   await axios
  //     .get('http://localhost:8000/api/projects')
  //     .then((result) => setProjectList(result.data));

  //   history.push('/');
  // }
  return (
    <>
      {step === 1 && (
        <div
          className="formcontainer"
          style={{
            height: '91vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage:
              'linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,.8)), url(' +
              project.media[0] +
              ')',
            justifyContent: 'space-around',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color: 'white',
          }} /* onSubmit={submitForm} */
        >
          <h1>{project.title}</h1>
          <p>Location: 🇩🇪 {project.location}</p>
          <p className="formcontainertitle">I want to work on this project</p>
          <div className="input-group">
            <textarea
              className="form-control"
              type="text"
              placeholder="Name project relevant skills"
              value={skillset}
              onChange={(event) => setSkillset(event.target.value)}
            />
          </div>
          <div className="input-group">
            <textarea
              className="form-control"
              type="text"
              placeholder="Why would you like the job?"
              value={pitch}
              onChange={(event) => setPitch(event.target.value)}
            />
          </div>
          <button className="button" onClick={() => setStep(2)}>
            Next
          </button>
          {/* <input className="button" type="submit" value="Submit" /> */}
        </div>
      )}
      {step === 2 && (
        <div
          className="formcontainer"
          style={{
            height: '91vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundImage:
              'linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,.8)), url(' +
              project.media[0] +
              ')',
            justifyContent: 'space-around',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color: 'white',
          }}
        >
          <WebcamStreamCapture
            id={id}
            setProjectList={setProjectList}
            skillset={skillset}
            pitch={pitch}
          />
        </div>
      )}
      ;
    </>
  );
};

export default Subscription;
