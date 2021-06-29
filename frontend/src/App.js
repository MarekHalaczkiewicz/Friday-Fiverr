import './App.css';
import { Switch } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './UserContext';
import Card from './components/Card';

const projects = [
  {
    title: 'Dog Shelter',
    media: [
      'https://media.4-paws.org/a/9/b/d/a9bd2520c2a7c941680bbfc56182ed5615e7cd3c/VIER%20PFOTEN_2016-09-18_081-1927x1333.jpg',
    ],
    body: 'Donate now to fund animal rescue organizations, provide affordable equipment for wildlife search and rescue, and support adoptable cats, dogs, and other pets...',
    goal: 500,
    contributions: [{ amount: 5, id: 'adsfasfsadfda' }],
    skills: [],
    tags: [],
    location: 'Berlin',
    organization: 'Dog Shelter Berlin',
  },
];

function App() {
  const [projectList, setProjectList] = useState(projects);
  const [user, setUser] = useState({
    username: '',
    isLoggedIn: false,
    userId: '',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Switch>
        {projectList.map((project, i) => {
          return (
            <Card
              key={i}
              title={project.title}
              imageUrl={project.media[0]}
              body={project.body}
            />
          );
        })}
      </Switch>
    </UserContext.Provider>
  );
}
export default App;
