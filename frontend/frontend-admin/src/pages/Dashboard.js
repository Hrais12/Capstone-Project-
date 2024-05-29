import React from "react";

import AvgClosed from "../components/AvgClosed";
import NumProperties from "../components/NumProperties";
import Rented from "../components/Rented";
import ActivListing from "../components/ActivListing";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <>
      <Nav />
      <Sidebar />
      <div className="dashboard">
        <div className="performance">
          <AvgClosed />
          <ActivListing />
        </div>
        <div className="properties">
          <NumProperties />

          <Rented />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
