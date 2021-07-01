import ReactPlayer from 'react-player';
import './VideoCard.css';
const VideoCard = ({ name, skillset, imageUrl }) => {
  return (
    <div className="video-card-container">
      <div className="image-container">
        <ReactPlayer
          url={`http://localhost:8000/public/${imageUrl}`}
          controls={true}
          width="400"
          height="300"
        />
      </div>
      <div className="card-content-personal">
        <h3 className="card-title"> {name}</h3>
        <p className="card-title">
          {' '}
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
