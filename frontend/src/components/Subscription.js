import React, { useState } from "react";
import "./subscription.css";
import axios from "axios";

export const Subscription = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [skillset, setSkillset] = useState("");
  const [pitch, setPitch] = useState("");
  async function submitForm(e) {
    e.preventDefault();
    const bodyReq = {
      name,
      profileURL: url,
      skillset,
      pitch,
    };
    console.log(bodyReq);
  }
  return (
    <form className="formcontainer" onSubmit={submitForm}>
      <h1 className="formcontainertitle">I want to work on this project</h1>
      <div className="labelcontainer">
        <label>
          Name:
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Fiverr:
          <input
            type="text"
            placeholder="Your Fiverr URL"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
          />
        </label>
        <label>
          Skillset:
          <input
            type="text"
            placeholder="Name project relevant skills"
            value={skillset}
            onChange={(event) => setSkillset(event.target.value)}
          />
        </label>
        <label>
          Pitch:
          <input
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
