import React, { useState } from 'react';
import './cardJob.css';
import { useHistory } from 'react-router-dom';
import ProgressBar from './ProgressBar';

function CardJob({
  index,
  title,
  imageUrl,
  location,
  setCurrentIndex,
  setShowContractors,
  contributors = [],
  goal,
}) {
  const history = useHistory();
  const total = contributors.reduce(
    (total, obj) => (obj.amount ? obj.amount + total : total),
    0
  );

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content-personal">
        <div>
          <h3 className="card-title"> {title}</h3>
        </div>
      </div>
      <h3>{`${total} / ${goal}€`}</h3>
      <ProgressBar
        bgcolor={'#6a1b9a'}
        completed={Math.floor((total / goal) * 100)}
      />
      <div className="location">
        <strong>
          <p>Location: {location}</p>
        </strong>
      </div>
      <div className="button-container">
        <button
          className="button"
          onClick={() => {
            setCurrentIndex(index);
            setShowContractors(true);
          }}
        >
          <a>View more</a>
        </button>
      </div>
    </div>
  );
}

export default CardJob;
