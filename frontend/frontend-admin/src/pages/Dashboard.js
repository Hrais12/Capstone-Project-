import React from "react";
import Goal from "../components/Goal";
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
          <ActivListing />
          <Goal />
          <AvgClosed />
        </div>
        <div className="properties">
          <Rented />
          <NumProperties />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
