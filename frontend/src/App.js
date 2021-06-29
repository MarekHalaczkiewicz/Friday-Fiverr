import "./App.css";
import React, { useState } from "react";
import { Switch } from "react-router-dom";
import Modal from "./components/Modal";
import Card from "./components/Card";

function App(props) {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className="App">
      <Card
        setOpenModal={setModalOpen}
        title="Dog Shelter"
        imageUrl="https://media.4-paws.org/a/9/b/d/a9bd2520c2a7c941680bbfc56182ed5615e7cd3c/VIER%20PFOTEN_2016-09-18_081-1927x1333.jpg"
        body="Donate now to fund animal rescue organizations, provide affordable equipment for wildlife search and rescue, and support adoptable cats, dogs, and other pets ...        "
      />
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
