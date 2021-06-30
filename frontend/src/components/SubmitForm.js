import React, { useState } from "react";
import axios from "axios";
/* import "./styles.css"; */
function Form() {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [contributors, setContributors] = useState("");
  const [skills, setSkills] = useState("");
  const [organization, setOrganization] = useState("");
  const [account, setAccount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("./submit", {
      projectName,
      projectDescription,
      email,
      phone,
      location,
      contributors,
      skills,
      organization,
      account,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Project Name"
        type="text"
        name="projectName"
        required
      />
      <input
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
        placeholder="Description of the project"
        type="text"
        name="projectDescription"
        required
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        type="email"
        name="email"
        required
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Contact number"
        type="text"
        name="phone"
        required
      />
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        type="text"
        name="location"
        required
      />
      <input
        value={contributors}
        onChange={(e) => setContributors(e.target.value)}
        placeholder="Contributors"
        type="text"
        name="contributors"
        required
      />
      <input
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Needed skills for the project"
        type="text"
        name="skills"
        required
      />
      <input
        value={organization}
        onChange={(e) => setOrganization(e.target.value)}
        placeholder="Name of the organization"
        type="text"
        name="organization"
        required
      />
      <input
        value={account}
        onChange={(e) => setAccount(e.target.value)}
        placeholder="Your account"
        type="text"
        name="account"
        required
      />
      <p>Expected amount of donations: 500 EUR</p>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
