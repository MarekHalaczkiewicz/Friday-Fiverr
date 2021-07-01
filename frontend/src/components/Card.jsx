import React, { useState } from 'react';
import './card.css';
import { useHistory } from 'react-router-dom';

function Card({
  setModalOpen,
  setFocused,
  index,
  title,
  imageUrl,
  body,
  location,
}) {
  const history = useHistory();
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div>
          <h3 className="card-title"> {title}</h3>
        </div>
        <p>{body}</p>
      </div>
      <div className="location">
        <strong>
          <p>Location: {location}</p>
        </strong>
      </div>
      <div className="donation-progress"></div>
      <div className="button-container">
        <button
          className="button"
          onClick={() => {
            window.scrollTo(0, 0);
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
