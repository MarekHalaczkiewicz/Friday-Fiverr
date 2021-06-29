import React, { useState } from "react";
import "./card.css";
import Modal from "./Modal";

function Card({ setOpenModal, title, imageUrl, body }) {

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
          <h2 class="text">Donation progress</h2>
          <div class="percent">

            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div class="num">

              <h2>
                80<span>%</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button
          className="button"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          <a>View more</a>
        </button>
      </div>
    </div>
  );
}

export default Card;
