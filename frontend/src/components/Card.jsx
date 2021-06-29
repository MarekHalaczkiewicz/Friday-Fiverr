import React from 'react';
import './card.css';

function Card({ title, imageUrl, body }) {
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
        <div className="box">
          <h2 className="text">Donation progress</h2>
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className="num">
              <h2>
                80<span>%</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="button">View more</button>
        <button className="button">Donate</button>
      </div>
    </div>
  );
}

export default Card;
