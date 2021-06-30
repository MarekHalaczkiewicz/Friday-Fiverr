import "./App.css";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./UserContext";
import Card from "./components/Card";
import Modal from "./components/Modal";
import CarouselContainer from "./components/CarouselContainer.js";
import Subscription from "./components/Subscription";
import Navbar from "./components/Navbar";
import Test from "./components/SubmitForm";

const projects = [
  {
    title: "Dog Shelter",
    media: [
      "https://media.4-paws.org/a/9/b/d/a9bd2520c2a7c941680bbfc56182ed5615e7cd3c/VIER%20PFOTEN_2016-09-18_081-1927x1333.jpg",
    ],
    body: "Donate now to fund animal rescue organizations, provide affordable equipment for wildlife search and rescue, and support adoptable cats, dogs, and other pets. We also looking for people, who can create a short video for us, to be played in local tv",
    goal: 500,
    contributions: [{ amount: 5, id: "adsfasfsadfda" }],
    skills: ["Video Editing", "Short video Ads", "Camera"],
    tags: ["Filming", "Editing"],
    location: "Berlin",
    organization: "Dog Shelter Berlin",
  },
];

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [projectList, setProjectList] = useState(projects);
  const [user, setUser] = useState({
    username: "",
    isLoggedIn: false,
    userId: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Navbar />
            <CarouselContainer />
            {projectList.map((project, i) => {
              return (
                <>
                  <Card
                    setModalOpen={setModalOpen}
                    key={i}
                    title={project.title}
                    imageUrl={project.media[0]}
                    body={project.body}
                  />
                  {modalOpen && (
                    <Modal setModalOpen={setModalOpen} project={project} />
                  )}
                </>
              );
            })}
          </div>
        </Route>
        <Route path="/subscribe">
          <Subscription />
        </Route>
        <Route path="/submit">
          <SubmitForm />
        </Route>
      </Switch>
    </UserContext.Provider>
  );
}
export default App;
