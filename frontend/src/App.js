import "./App.css";
import { Switch } from "react-router-dom";
import Card from "./components/Card";

function App() {
  return (
    <Switch>
      <Card
        title="Dog Shelter"
        imageUrl="https://media.4-paws.org/a/9/b/d/a9bd2520c2a7c941680bbfc56182ed5615e7cd3c/VIER%20PFOTEN_2016-09-18_081-1927x1333.jpg"
        body="Donate now to fund animal rescue organizations, provide affordable equipment for wildlife search and rescue, and support adoptable cats, dogs, and other pets ...        "
      />
    </Switch>
  );
}

export default App;
