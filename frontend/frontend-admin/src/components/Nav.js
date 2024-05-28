import React from "react";

import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useContext } from "react";
import { ListingContext } from "../App";

function Nav() {
  const { loggedUser } = useContext(ListingContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/logout");
    console.log(res);
    navigate("/logout");
  };
  return (
    <div className="nav">
      <div className="leftNav">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CI4Jz5PG2qJSA1xpXjcS6IK1a6Jw0w-Ek-DpBSX7NQ&s"
          alt="User Name"
          className="userPic"
        ></img>
        <div className="userName">{loggedUser}</div>
      </div>
      <div className="rightNav">
        <button className="logout" type="submit" onClick={handleSubmit}>
          <MdLogout /> Logout
        </button>
      </div>
    </div>
  );
}

export default Nav;
