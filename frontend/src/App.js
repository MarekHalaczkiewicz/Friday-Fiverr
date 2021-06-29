import "./App.css";
import { Switch, Route } from "react-router-dom";
import Subscription from "./components/Subscription";
import Card from "./components/Card";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Card
          title="Dog Shelter"
          imageUrl="https://media.4-paws.org/a/9/b/d/a9bd2520c2a7c941680bbfc56182ed5615e7cd3c/VIER%20PFOTEN_2016-09-18_081-1927x1333.jpg"
          body="Donate now to fund animal rescue organizations, provide affordable equipment for wildlife search and rescue, and support adoptable cats, dogs, and other pets ...        "
        />
      </Route>
      <Route path="/subscribe">
        <Subscription />
      </Route>
    </Switch>
  );
}

export default App;
