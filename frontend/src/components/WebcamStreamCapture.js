import React, { useContext } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import UserContext from '../UserContext';

const WebcamStreamCapture = ({ setProjectList }) => {
  const id = '60dd9759f6af47b3340df584';
  const { user } = useContext(UserContext);
  const videoConstraints = {
    width: 320,
    height: 240,
    facingMode: 'user',
  };
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: 'video/webm',
    });
    mediaRecorderRef.current.addEventListener(
      'dataavailable',
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(async () => {
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
      await axios.post(`http://localhost:8000/api/projects/${id}/contractor`, {
        name: 'Papi',
        profileURL: 'aaa',
        skillset: 'asd',
        pitch: 'adfjkah',
        videoURL: `${id}_${user.id}.webm`,
        userID: user.id,
      });
      await axios
        .get('http://localhost:8000/api/projects')
        .then((result) => setProjectList(result.data));
      // const url = URL.createObjectURL(blob);
      // const a = document.createElement('a');
      // document.body.appendChild(a);
      // a.style = 'display: none';
      // a.href = url;
      // a.download = 'react-webcam-stream-capture.webm';
      // a.click();
      // console.log(url);
      // window.URL.revokeObjectURL(url);
      // setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <>
      <Webcam
        audio={true}
        ref={webcamRef}
        videoConstraints={videoConstraints}
      />
      {capturing ? (
        <button onClick={handleStopCaptureClick}>Stop Capture</button>
      ) : (
        <button onClick={handleStartCaptureClick}>Start Capture</button>
      )}
      {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )}
    </>
  );
};

export default WebcamStreamCapture;
