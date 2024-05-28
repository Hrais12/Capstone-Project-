import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import axios from "axios";
import { Link } from "react-router-dom";

function SignUp() {
  const style = {
    fontSize: "2em",
    position: "absolute",
    left: "80px",
    color: "grey",
  };
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const [addUser, setAddUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    setAddUser({
      ...addUser,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Create new user using post method
    const res = await axios.post("http://localhost:3000/signup", addUser);
    console.log(res);
    navigate("/login");
    // Axios Req -> POST (formData => {state})
    setUsers(() => [...users, res.user]);
    // This adds the new user to the rest of existing db.
    setAddUser({
      name: "",
      email: "",
      password: "",
    });
    // to reset the form
  };

  return (
    <div className="sign-container">
      <form className="signContainer" onSubmit={handleSubmit}>
        <div className="signHeader">
          <div className="signText">Sign Up</div>
        </div>

        <div className="signInputs">
          <div className="input">
            <FiUser style={style} />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={addUser.name}
              onChange={handleChange}
            />{" "}
          </div>
          <div className="input">
            <MdOutlineMailOutline style={style} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={addUser.email}
              onChange={handleChange}
            />{" "}
          </div>
        </div>
        <div className="signInputs">
          <div className="input">
            <RiLockPasswordLine style={style} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={addUser.password}
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <div className="forgotPassword">
          Already have an account?{" "}
          <Link key="signUp" to="/login" className="sidebarLink">
            <span>Sign in</span>
          </Link>
        </div>

        <div className="submit-container">
          <button className="submit" type="submit">
            {" "}
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
