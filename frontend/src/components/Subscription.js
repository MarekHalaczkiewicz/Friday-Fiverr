import React, { useState, useContext } from 'react';
import './subscription.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../UserContext';
import WebcamStreamCapture from './WebcamStreamCapture';

export const Subscription = ({ id, setProjectList }) => {
  // const [step, setStep] = useState(1);
  // const { user } = useContext(UserContext);
  // const [name, setName] = useState('');
  // const [url, setUrl] = useState('');
  // const [skillset, setSkillset] = useState('');
  // const [pitch, setPitch] = useState('');
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
    <div className="formcontainer">
      {/* <form className="formcontainer" onSubmit={submitForm}> */}

      <WebcamStreamCapture id={id} setProjectList={setProjectList} />

      {/* </form> */}
    </div>
  );
};

export default Subscription;
