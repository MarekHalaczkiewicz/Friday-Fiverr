import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../UserContext";
import { useHistory } from "react-router-dom";
/* import "./styles.css"; */
function Form({ setProjectList }) {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [projectName, setProjectName] = useState("");
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

    window.alert('Thanks for submitting your project');
  };
  return (
    <form className="formcontainer" onSubmit={handleSubmit}>
      <h1 className="formcontainertitle">Submit new project</h1>
      <div>
        <label className="labelcontainer">
          Project Name
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project Name"
            type="text"
            name="projectName"
            required
          />
        </label>
        <label className="labelcontainer">
          Project description
          <input
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            placeholder="Please describe the project"
            type="text"
            name="projectDescription"
            required
          />
        </label>
        <label className="labelcontainer">
          E-mail address
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            type="email"
            name="email"
            required
          />
        </label>
        <label className="labelcontainer">
          Phone number
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Contact number"
            type="text"
            name="phone"
            required
          />
        </label>
        <label className="labelcontainer">
          Location
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            type="text"
            name="location"
            required
          />
        </label>
        <label className="labelcontainer">
          Contributors
          <input
            value={contributors}
            onChange={(e) => setContributors(e.target.value)}
            placeholder="Contributors"
            type="text"
            name="contributors"
            required
          />
        </label>
        <label className="labelcontainer">
          Skills required
          <input
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Needed skills for the project"
            type="text"
            name="skills"
            required
          />
        </label>
        <label className="labelcontainer">
          Organization
          <input
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            placeholder="Name of the organization"
            type="text"
            name="organization"
            required
          />
        </label>
        <label className="labelcontainer">
          Project goal
          <input
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Please decribe your goal"
            type="number"
            name="goal"
            required
          />
        </label>
        <button className="submitbutton" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
export default Form;
