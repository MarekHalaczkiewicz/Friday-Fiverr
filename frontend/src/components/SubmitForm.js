import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../UserContext";
import { useHistory } from "react-router-dom";
import "./submitform.css";
function Form({ setProjectList }) {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [projectName, setProjectName] = useState("");
  const [projectMedia, setProjectMedia] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [contributors, setContributors] = useState("");
  const [skills, setSkills] = useState("");
  const [organization, setOrganization] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/projects/", {
        title: projectName,
        media: projectMedia,
        description: projectDescription,
        organization: { name: organization, contact: email, account: user.id },
        location,
        skills,
        goal,
      })
      .then(() => history.push("/"));

    await axios
      .get("http://localhost:8000/api/projects")
      .then((result) => setProjectList(result.data));

    window.alert("Thanks for submitting your project");
  };
  return (
    <form className="formcontainer" onSubmit={handleSubmit}>
      <h1 className="formcontainertitle">Submit new project</h1>

      <div className="input-group">
        <textarea
          className="form-control"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Project Name"
          type="text"
          name="projectName"
          required
        />
      </div>
      <div className="input-group">
        <textarea
          className="form-control"
          value={projectMedia}
          onChange={(e) => setProjectMedia(e.target.value)}
          placeholder="Project Media"
          type="URL"
          name="projectMedia"
          required
        />
      </div>
      <div className="input-group">
        <textarea
          className="form-control"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          placeholder="Please describe the project"
          type="text"
          name="projectDescription"
          required
        />
      </div>
      <div className="input-group">
        <textarea
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          name="email"
          required
        />
      </div>
      <div className="input-group">
        <textarea
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Contact number"
          type="text"
          name="phone"
          required
        />
      </div>
      <div className="input-group">
        <textarea
          className="form-control"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          type="text"
          name="location"
          required
        />
      </div>
      <div className="input-group">
        <textarea
          className="form-control"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Needed skills for the project"
          type="text"
          name="skills"
          required
        />
      </div>
      <div className="input-group">
        <textarea
          className="form-control"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          placeholder="Name of the organization"
          type="text"
          name="organization"
          required
        />
      </div>
      <div className="input-group">
        <textarea
          className="form-control"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Please decribe your goal"
          type="number"
          name="goal"
          required
        />
      </div>
      {/* <div className="input-group">
          <textarea
          className="form-control"
            className="form-control"
            type="text"
            name="text-1542372332072"
            id="text-1542372332072"
            required="required"
            placeholder="Ihr Name"
          />
          <div for="text-1542372332072">Ihr Name</div>
          <div className="req-mark">!</div>
        </div> */}
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}
export default Form;
