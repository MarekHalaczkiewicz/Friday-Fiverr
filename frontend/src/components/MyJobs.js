import ReactPlayer from 'react-player';
import Application from './Application';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import CardJob from './CardJob';
import './MyJobs.css';

const MyJobs = ({ userProjects }) => {
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="personal-jobs">
      {!show && (
        <>
          {userProjects.map((project, i) => {
            return (
              <CardJob
                key={`div-${i}`}
                title={project.title}
                imageUrl={project.media[0]}
                location={project.location}
                contributors={project.contributors}
                goal={project.goal}
                setCurrentIndex={setCurrentIndex}
                setShow={setShow}
                index={i}
              />
              /* <div key={`div-${i}`}>
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
              </div> */
            );
          })}
        </>
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
    </div>
  );
};

export default MyJobs;
