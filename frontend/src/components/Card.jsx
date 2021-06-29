import React, { useState } from "react";
import "./card.css";
import Modal from "./Modal";
import { useHistory } from "react-router-dom";

function Card({ setModalOpen, title, imageUrl, body }) {
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
      <div className="donation-progress">
        <div class="box">
          {/* To fix this div */}
          <div className="button-container">
            <button
              className="button"
              onClick={() => history.push("/subscribe")}
            >
              <a>Subscribe</a>
            </button>
            <button className="button" onClick={() => history.push("/donate")}>
              <a>Donate</a>
            </button>
          </div>
          {/* End of div */}
        </div>
      </div>
      <div className="button-container">
        <button
          className="button"
          onClick={() => {
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
