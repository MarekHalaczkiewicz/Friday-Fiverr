import "./App.css";
import { Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Switch>
      <div>
        <Navbar />
      </div>
    </Switch>
  );
}

export default App;
