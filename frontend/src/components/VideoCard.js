import ReactPlayer from 'react-player';
import './VideoCard.css';
import { useState } from 'react';

const VideoCard = ({ name, skillset, imageUrl, pitch }) => {
  const [play, setPlay] = useState(false);
  return (
    <div className="video-card-container">
      <div className="image-container-video" onClick={() => setPlay((p) => !p)}>
        <ReactPlayer
          url={`http://localhost:8000/public/${imageUrl}`}
          controls={false}
          width="400"
          height="300"
          playing={play}
          sound={play}
        />
      </div>
      <div className="card-content-personal-video">
        <h3 className="card-title"> {name}</h3>
        <p>{pitch}</p>
        <p className="card-title">
          {skillset &&
            skillset
              .split(' ')
              .map((skill) => <button className="button">{skill}</button>)}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
