import React, { useState, useContext } from 'react';
import './subscription.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../UserContext';

export const Subscription = ({ id, setProjectList }) => {
  const { user } = useContext(UserContext);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [skillset, setSkillset] = useState('');
  const [pitch, setPitch] = useState('');
  const history = useHistory();
  async function submitForm(e) {
    e.preventDefault();
    const bodyReq = {
      name,
      profileURL: url,
      skillset,
      pitch,
      userId: user.id,
    };

    console.log(id);
    console.log(user.id);
    await axios
      .post(`http://localhost:8000/api/projects/${id}/subscribe`, bodyReq)
      .then((response) => {
        console.log(response.data);
      });
    window.alert('Thanks for your application');

    await axios
      .get('http://localhost:8000/api/projects')
      .then((result) => setProjectList(result.data));

    history.push('/');
  }
  return (
    <form className="formcontainer" onSubmit={submitForm}>
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
      <input className="submitbutton" type="submit" value="Submit" />
      {/* <textarea
          className="textarea"
          placeholder="0/200"
          maxLength="200"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        ></textarea> */}
    </form>
  );
};

export default Subscription;
