import React from "react";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <div className="loggedOut-container">
      <div className="loggedOut">Logged Out</div>
      <hr></hr>
      <div className="thnks-loggedOut">Thank you for using AgentHub</div>
      <Link key="signIn" to="/login" className="sidebarLink">
        <button className="signIn-logeedOut">Sign in Again </button>
      </Link>
    </div>
  );
}

export default Logout;
