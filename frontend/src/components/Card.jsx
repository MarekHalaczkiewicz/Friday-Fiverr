import React, { useState } from 'react';
import './card.css';
import { useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';

function Card({
  setModalOpen,
  setFocused,
  index,
  title,
  imageUrl,
  video,
  body,
  location,
}) {
  const history = useHistory();
  return (
    <div className="card-container">
      {video ? (
        <ReactPlayer
          url={`http://localhost:8000/public/${video}`}
          controls={false}
          width="280"
          height="212"
          muted={true}
          playing={true}
          loop={true}
        />
      ) : (
        <div className="image-container">
          <img src={imageUrl} alt="" />
        </div>
      )}
      <div className="card-content">
        <div>
          <h3 className="card-title"> {title}</h3>
        </div>
        <p>{body}</p>
      </div>
      <div className="location">
        <strong>
          <p>{`Location: 🇩🇪 ${location}`}</p>
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
