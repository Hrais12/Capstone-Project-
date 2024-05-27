import React from "react";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <div>
      Logout
      <div>Logged Out</div>
      <hr></hr>
      <div>Thank you for using AgentHub</div>
      <Link key="signIn" to="/login" className="sidebarLink">
        <button>Sign in Again </button>
      </Link>
    </div>
  );
}

export default Logout;
