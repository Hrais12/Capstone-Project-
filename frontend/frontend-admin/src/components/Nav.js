import React from "react";

import { MdMenu, MdLogout } from "react-icons/md";

function Nav() {
  return (
    <div className="nav">
      <div className="leftNav">
        <div className="menuIcon">
          <MdMenu />
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CI4Jz5PG2qJSA1xpXjcS6IK1a6Jw0w-Ek-DpBSX7NQ&s"
          alt="User Name"
          className="userPic"
        ></img>
        <div>User Name</div>
        {/* <p>User Name</p> */}
      </div>
      <div className="rightNav">
        <MdLogout /> Logout
      </div>
    </div>
  );
}

export default Nav;
