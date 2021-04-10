import { React } from "react";

import "./Welcome.css";

function Welcome() {
  return (
    <div className="signIn">
      <div className="signIn_intro">
        <h1>HangOut</h1>
        <h3>Welcome to Chat app</h3>
      </div>
      <button className="signIn_btn">Sign In</button>
    </div>
  );
}

export default Welcome;
