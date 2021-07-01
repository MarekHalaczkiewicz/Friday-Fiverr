import React, { useState, useContext } from 'react';
import './subscription.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../UserContext';
import WebcamStreamCapture from './WebcamStreamCapture';

export const Subscription = ({ id, setProjectList }) => {
  const [step, setStep] = useState(1);
  const { user } = useContext(UserContext);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [skillset, setSkillset] = useState('');
  const [pitch, setPitch] = useState('');
  const history = useHistory();

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
    <div className="formcontainer">
      {/* <form className="formcontainer" onSubmit={submitForm}> */}
      {step === 1 && (
        <>
          <h1 className="formcontainertitle">I want to work on this project</h1>
          <div>
            <label className="labelcontainer">
              Name
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label className="labelcontainer">
              Fiverr
              <input
                type="text"
                placeholder="Your Fiverr URL"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
              />
            </label>
            <label className="labelcontainer">
              Skillset
              <textarea
                type="text"
                placeholder="Name project relevant skills"
                value={skillset}
                onChange={(event) => setSkillset(event.target.value)}
              />
            </label>
            <label className="labelcontainer">
              Pitch
              <textarea
                type="text"
                placeholder="Why would you like the job?"
                value={pitch}
                onChange={(event) => setPitch(event.target.value)}
              />
            </label>
          </div>
          <button onClick={() => setStep(2)}>Next</button>
          {/* <input className="submitbutton" type="submit" value="Submit" /> */}
        </>
      )}
      {step === 2 && (
        <>
          <WebcamStreamCapture
            id={id}
            name={name}
            profileURL={url}
            skillset={skillset}
            pitch={pitch}
            setStep={setStep}
            setProjectList={setProjectList}
          />
        </>
      )}
      {/* </form> */}
    </div>
  );
};

export default Subscription;
