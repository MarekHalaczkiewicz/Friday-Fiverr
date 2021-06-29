import React, { useState } from "react";
import "./subscription.css";

export const Subscription = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <h1>Subscription</h1>
      <textarea
        className="textarea"
        placeholder="0/200"
        maxLength="200"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      ></textarea>
    </div>
  );
};

export default Subscription;
