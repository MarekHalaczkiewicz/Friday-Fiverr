import React, { useState } from "react";

const Donate = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <h1 onChange={(event) => setValue(event.target.value)} value={value}>
        Here you can donate things
      </h1>
    </div>
  );
};

export default Donate;
