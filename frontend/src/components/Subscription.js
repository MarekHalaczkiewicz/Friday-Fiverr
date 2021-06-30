import React, { useState } from "react";
import "./subscription.css";

export const Subscription = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <form>
        <h1>I want to work on this project</h1>
        <label>
          Name:
          <input
            type="text"
            placeholder="Your Name"
            // value={this.state.value}
            // onChange={this.handleChange}
          />
        </label>
        <label>
          Fiverr:
          <input
            type="text"
            placeholder="Your Fiverr URL"
            // value={this.state.value}
            // onChange={this.handleChange}
          />
        </label>
        <label>
          Skillset:
          <input
            type="text"
            placeholder="Name project relevant skills"
            // value={this.state.value}
            // onChange={this.handleChange}
          />
        </label>
        <label>
          Pitch:
          <input
            type="text"
            placeholder="Why would you like the job?"
            // value={this.state.value}
            // onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
        {/* <textarea
          className="textarea"
          placeholder="0/200"
          maxLength="200"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        ></textarea> */}
      </form>
    </div>
  );
};

export default Subscription;
