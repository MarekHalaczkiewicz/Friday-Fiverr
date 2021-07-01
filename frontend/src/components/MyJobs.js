const MyJobs = ({ userProjects }) => {
  return (
    <div>
      {userProjects.map((project, i) => {
        return (
          <div>
            <h3>{project.title}</h3>
            <img source={project.media[0]} />
          </div>
        );
      })}
    </div>
  );
};

export default MyJobs;
