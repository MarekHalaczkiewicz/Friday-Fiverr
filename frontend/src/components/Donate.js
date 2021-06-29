import React, { useState } from "react";
import "./donate.css";

const Donate = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <h1 onChange={(event) => setValue(event.target.value)} value={value}>
        I want to make a donation
      </h1>
    </div>
  );
};

export default Donate;
