import { React } from "react";

import "./Welcome.css";
import SignIn from '../signin/SignIn';


function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome_intro">
        <h1>Gossip Point</h1>
      </div>
      <div class="signin_btn">Enter</div>
     
    </div>
  );
}

export default Welcome;
