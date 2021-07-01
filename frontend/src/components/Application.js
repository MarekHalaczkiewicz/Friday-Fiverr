import ReactPlayer from 'react-player';

const Application = ({ c, index }) => {
  return (
    <div>
      <h3>{c.name}</h3>
      <ReactPlayer
        url={`http://localhost:8000/public/${c.videoURL}`}
        controls={true}
      />
    </div>
  );
};

export default Application;
