import React from "react";

import { Link } from "react-router-dom";

import { MdOutlineDashboard, MdContacts, MdSettings } from "react-icons/md";
import { PiHandshake } from "react-icons/pi";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <Link key="dashboard" to="/dashboard" className="sidebarLink">
          <li className="sidebarListItem">
            {" "}
            <MdOutlineDashboard /> Dashboard
          </li>
        </Link>
        <Link key="clients" to="/clients" className="sidebarLink">
          <li className="sidebarListItem">
            {" "}
            <MdContacts /> Clients
          </li>
        </Link>
        <Link key="opportunities" to="/opportunities" className="sidebarLink">
          <li className="sidebarListItem">
            {" "}
            <PiHandshake /> Opportunities
          </li>
        </Link>
        <Link key="home" to="" className="sidebarLink">
          <li className="sidebarListItem">
            {" "}
            <MdSettings /> Settings
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
