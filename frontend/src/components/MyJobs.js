import ReactPlayer from 'react-player';
import Application from './Application';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import CardJob from './CardJob';
import VideoCard from './VideoCard';
import './MyJobs.css';
import CarouselContainerPersonal from './CarouselContainerPersonal';

const MyJobs = ({ userProjects, showContractors, setShowContractors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="personal-jobs">
      {!showContractors && (
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
                setShowContractors={setShowContractors}
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
      {showContractors && (
        <div className="carousel-personal">
          <CarouselContainerPersonal
            title={userProjects[currentIndex].title}
            imageUrl={userProjects[currentIndex].media[0]}
            description={userProjects[currentIndex].description}
          />
          <div className="close">
            <button
              className="button"
              onClick={() => {
                setShowContractors(false);
              }}
            >
              Back to list
            </button>
          </div>
          <div className="job-contractors-container">
            {userProjects[currentIndex].contractor.map((c, i) => {
              return (
                <VideoCard
                  key={`app-${i}`}
                  isVideo={true}
                  imageUrl={c.videoURL}
                  index={i}
                  name={c.name}
                  skillset={c.skillset}
                  pitch={c.pitch}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyJobs;
