import "./App.css";
import { Switch } from "react-router-dom";
import CarouselContainer from "./components/CarouselContainer.js";

function App() {
  return (
    <Switch>
      <div>
        <CarouselContainer />
      </div>
    </Switch>
  );
}

export default App;
