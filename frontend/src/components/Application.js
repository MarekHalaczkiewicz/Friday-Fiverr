import ReactPlayer from 'react-player';

const Application = ({ c, index }) => {
  console.log(c);
  return (
    <div>
      <h3>{c.name}</h3>
      <p>{c.skillset}</p>
      <ReactPlayer
        url={`http://localhost:8000/public/${c.videoURL}`}
        controls={true}
      />
    </div>
  );
};

export default Application;
