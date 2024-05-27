import React from "react";

import { Link } from "react-router-dom";

import { BsHouseHeart } from "react-icons/bs";
import { MdOutlineDashboard, MdContacts } from "react-icons/md";
import { PiHandshake } from "react-icons/pi";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <Link key="home" to="" className="sidebarLink">
          <li className="sidebarListItem">
            {" "}
            <BsHouseHeart /> Home
          </li>
        </Link>
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
      </ul>
    </div>
  );
}

export default Sidebar;
