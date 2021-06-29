import React, { useState } from "react";
import "./card.css";
import Modal from "./Modal";
import { useHistory } from "react-router-dom";

function Card({ setModalOpen, setFocused, index, title, imageUrl, body }) {
  const history = useHistory();
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3> {title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
      </div>
      <div className="donation-progress"></div>
      <div className="button-container">
        <button
          className="button"
          onClick={() => {
            setFocused(index);
            setModalOpen(true);
          }}
        >
          <a>View more</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
