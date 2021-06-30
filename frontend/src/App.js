import './App.css';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import UserContext from './UserContext';
import Card from './components/Card';
import Modal from './components/Modal';
import CarouselContainer from './components/CarouselContainer.js';
import Subscription from './components/Subscription';
import Donate from './components/Donate';
import Navbar from './components/Navbar';
import axios from 'axios';
import { LoginPage } from './components/LoginPage.js';

const projects = [
  {
    projectId: '123456789',
    title: 'Dog Shelter',
    media: [
      'https://media.4-paws.org/a/9/b/d/a9bd2520c2a7c941680bbfc56182ed5615e7cd3c/VIER%20PFOTEN_2016-09-18_081-1927x1333.jpg',
    ],
    description:
      'Donate now to fund animal rescue organizations, provide affordable equipment for wildlife search and rescue, and support adoptable cats, dogs, and other pets. We also looking for people, who can create a short video for us, to be played in local tv',
    goal: 500,
    contributors: [{ amount: 5, id: 'adsfasfsadfda' }],
    skills: ['Video Editing', 'Short video Ads', 'Camera'],
    tags: ['Filming', 'Editing'],
    location: 'Berlin',
    organization: {
      name: 'Dog Shelter Berlin',
      contact: 'pappp',
      account: 'aslk;dfjals;fj',
    },
  },

  {
    title: 'Web-page for local orphanage ',
    media: [
      'https://upload.wikimedia.org/wikipedia/commons/0/06/St._John%27s_Orphanage_in_2015.jpg',
    ],
    description:
      'Help with the creation of web-page for a local orphanages. Donate, or come and share your skills with kids.',
    goal: 450,
    contributors: [{ amount: 10, id: 'adsfasfsadfda2' }],
    skills: ['Web-development', 'Online-sites creation'],
    tags: ['Web Page', 'Web-developer'],
    location: 'Reinikendorf',
    organization: {
      name: 'Save the Children Deutschland',
      contact: 'pappp',
      account: 'aslk;dfjals;fj',
    },
  },

  {
    title: 'Dancing for kids',
    media: [
      'https://cms.qz.com/wp-content/uploads/2019/12/The-power-of-dance-e1575906582595.jpg?quality=75&strip=all&w=1600&h=900&crop=1',
    ],
    description:
      "For kid's day this year, we want to give the children the opportunity to see, and experience dancing of various music genres and countries. If you can't donate, maybe You are a dancer and give our angels a show of your own.",
    goal: 250,
    contributors: [{ amount: 20, id: 'adsfasfsadfda3' }],
    skills: ['Dance', 'Choreography'],
    tags: ['Dance'],
    location: 'Wedding',
    organization: {
      name: 'Dance for The Kids',
      contact: 'pappp',
      account: 'aslk;dfjals;fj',
    },
  },
];

let userToken = JSON.parse(localStorage.getItem('user'));
const initialState = userToken ? { loggedIn: true, ...userToken } : {};

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [projectList, setProjectList] = useState(projects);
  const [user, setUser] = useState(initialState);
  const [focused, setFocused] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/projects')
      .then((result) => setProjectList(result.data));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Navbar user={user} setUser={setUser} />
            <CarouselContainer />

            <div className="bottom">
              {projectList.map((project, i) => {
                return (
                  <div className="cards-container">
                    <Card
                      setModalOpen={setModalOpen}
                      setFocused={setFocused}
                      key={i}
                      index={i}
                      title={project.title}
                      imageUrl={project.media[0]}
                      body={project.description}
                    />
                  </div>
                );
              })}
            </div>
            {modalOpen && (
              <Modal
                setModalOpen={setModalOpen}
                project={projectList[focused]}
                projectList={projectList}
                setProjectList={setProjectList}
              />
            )}
          </div>
        </Route>
        <Route path="/subscribe">
          <Subscription />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/login">
          <LoginPage user={user} setUser={setUser} />
        </Route>
      </Switch>
    </UserContext.Provider>
  );
}
export default App;
