import React, { useState, useContext } from 'react';
import './subscription.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../UserContext';
import WebcamStreamCapture from './NOT_WORKING_WebcamStreamCapture';

export const Subscription = ({ id, setProjectList }) => {
  const [step, setStep] = useState(0);
  const { user } = useContext(UserContext);
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [skillset, setSkillset] = useState('');
  const [pitch, setPitch] = useState('');
  const history = useHistory();

  // const [recordedChunks, setRecordedChunks] = React.useState([]);

  const VideoPitch = ({ setRecordedChunks }) => {
    return (
      <>
        <WebcamStreamCapture setRecordedChunks={setRecordedChunks} />
        <button onClick={() => setStep(1)}>Next</button>
      </>
    );
  };

  const ProjectDetails = (props) => {
    return (
      <form>
        <h1 className="formcontainertitle">I want to work on this project</h1>
        <div>
          <label className="labelcontainer">
            Name
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(event) => {
                event.preventDefault();
                setName(event.target.value);
              }}
            />
          </label>
          <label className="labelcontainer">
            Fiverr
            <input
              type="text"
              placeholder="Your Fiverr URL"
              value={url}
              onChange={(event) => {
                event.preventDefault();
                setUrl(event.target.value);
              }}
            />
          </label>
          <label className="labelcontainer">
            Skillset
            <textarea
              type="text"
              placeholder="Name project relevant skills"
              value={skillset}
              onChange={(event) => {
                event.preventDefault();
                setSkillset(event.target.value);
              }}
            />
          </label>
          <label className="labelcontainer">
            Pitch
            <textarea
              type="text"
              placeholder="Why would you like the job?"
              value={pitch}
              onChange={(event) => {
                event.preventDefault();
                setPitch(event.target.value);
              }}
            />
          </label>
        </div>
        {/* <button className="submitbutton" onClick={handleVideoSubmit}>
          Submit
        </button> */}
        <input className="submitbutton" type="submit" value="Submit" />
      </form>
    );
  };

  const steps = [
    <VideoPitch /* setRecordedChunks={setRecordedChunks} */ />,
    <ProjectDetails />,
  ];

  /* async function submitForm(e) {
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
  } */

  /* const uploadVideo = async () => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm',
      });
      console.log(blob);
      let formdata = new FormData(); //create a from to of data to upload to the server
      formdata.append('videoBlob', blob, `${id}_${user.id}.webm`); // append the sound blob and the name of the file. third argument will show up on the server as req.file.originalname
      // Now we can send the blob to a server...
      //build a HTTP POST request
      const httpRequestOptions = {
        url: `http://localhost:8000/api/projects/${id}/upload`, //we've made a POST endpoint on the server at /upload
        method: 'PUT',
        data: formdata, // with our form data packaged above
        headers: new Headers({
          enctype: 'multipart/form-data', // the enctype is important to work with multer on the server
        }),
      };
      // console.log(httpRequestOptions);
      // use p5 to make the POST request at our URL and with our options
      await axios(httpRequestOptions)
        .then((response) => console.log(response))
        //  (successStatusCode)=>{ //if we were successful...
        //    console.log("uploaded recording successfully: " + successStatusCode)
        //  },
        .catch((error) => console.error(error));
    }
  };

  const updateContractor = async () => {
    await axios.post(`http://localhost:8000/api/projects/${id}/subscribe`, {
      name,
      profileURL: url,
      skillset,
      pitch,
      videoURL: `${id}_${user.id}.webm`,
      userID: user.id,
    });
  };

  const refreshList = async () => {
    await axios
      .get('http://localhost:8000/api/projects')
      .then((result) => setProjectList(result.data));
  };

  const redirect = () => {
    setStep(0);
    window.alert('Thanks for applying to this project!');
    history.push('/');
  };

  const handleVideoSubmit = React.useCallback(async (e) => {
    e.preventDefault();
    await uploadVideo();
    await updateContractor();
    await refreshList();
    redirect();
  }); */

  return (
    <div className="formcontainer" /* onSubmit={handleVideoSubmit} */>
      {steps[step]}
    </div>
  );
};

export default Subscription;
