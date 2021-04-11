import { React } from "react";

import "./Welcome.css";
import SignIn from '../signin/SignIn'

function Welcome() {
  return (
    <div className="signIn">
      <div className="signIn_intro">
        <h1>HangOut</h1>
        <h3>Welcome to Chat app</h3>
      <SignIn />
      </div>
      {/* <button className="signIn_btn"></button> */}
    </div>
  );
}

export default Welcome;
