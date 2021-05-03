import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";

import Welcome from "./Components/welcomePage/Welcome";



function App() {
  return (
    <Router>
      <Route>
        <Welcome />
      </Route>
    </Router>
  );
}

export default App;
