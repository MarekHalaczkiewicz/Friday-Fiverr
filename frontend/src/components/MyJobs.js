import ReactPlayer from 'react-player';
import Application from './Application';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const MyJobs = ({ userProjects }) => {
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {!show && (
        <div>
          {userProjects.map((project, i) => {
            return (
              <div key={`div-${i}`}>
                <h3>{project.title}</h3>
                <img source={project.media[0]} />
                <button
                  onClick={() => {
                    console.log(userProjects);
                    setCurrentIndex(i);
                    console.log(userProjects[i].contractor);
                    setShow(true);
                  }}
                >
                  Show
                </button>
              </div>
            );
          })}
        </div>
      )}
      {show && (
        <div>
          <button
            onClick={() => {
              setShow(false);
            }}
          >
            Close
          </button>
          {userProjects[currentIndex].contractor.map((c, i) => {
            return <Application key={`app-${i}`} c={c} index={i} />;
          })}
        </div>
      )}
    </>
  );
};

export default MyJobs;
