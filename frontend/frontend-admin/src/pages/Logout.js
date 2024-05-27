import React from "react";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <div className="loggedOut-container">
      <div className="loggedOut">
        <div className="loggedOut-title">Logged Out</div>

        <div className="thnks-loggedOut">Thank you for using AgentHub</div>
        <Link key="signIn" to="/login" className="sidebarLink">
          <button className="signIn-logeedOut">Sign in Again </button>
        </Link>
      </div>
    </div>
  );
}

export default Logout;
