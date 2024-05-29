import React, { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";

import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ListingContext } from "../App";

function Login() {
  const style = {
    fontSize: "2em",
    position: "absolute",
    left: "80px",
    color: "grey",
  };
  const { setLoggedUser } = useContext(ListingContext);
  const navigate = useNavigate();

  //State to manage login user data
  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setLogUser({
      ...logUser,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/login", logUser);
    console.log(res.data.user.name);
    navigate("/dashboard"); //navigate to dashboard after successful login
    setLoggedUser(res.data.user.name);
    localStorage.setItem("loggedUser", res.data.user.name); // store the user name in the browser after a successful login: localStorage("key",value)
    setLogUser({
      email: "",
      password: "",
    });
    // to reset the form
  };

  return (
    <div className="sign-container">
      <form className="signContainer" onSubmit={handleSubmit}>
        <div className="signHeader">
          <div className="signText">Sign in</div>
        </div>

        <div className="signInputs">
          <div className="input">
            <MdOutlineMailOutline style={style} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={logUser.email}
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
              value={logUser.password}
              onChange={handleChange}
            />{" "}
          </div>
        </div>

        <div className="forgotPassword">
          Forgot Password? <span>Click Here</span>
        </div>
        <div className="forgotPassword">
          Don't have an account?{" "}
          <Link key="signIn" to="/" className="sidebarLink">
            <span>Sign Up</span>
          </Link>
        </div>

        <div className="submit-container">
          <button className="submit" type="submit">
            {" "}
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
