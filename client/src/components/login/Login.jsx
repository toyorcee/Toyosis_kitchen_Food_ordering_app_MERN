import React from "react";
import { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/womaneating2.jpg";
import { login } from "../../redux/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:4000/auth/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);
      dispatch(login(data)); // {userInfo, token}
      navigate("/");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginLeftSide">
          <img src={img} className="leftImg" alt="" />
        </div>
        <div className="loginRightSide">
          <h2 className="logintitle">Login</h2>
          <form onSubmit={handleLogin} className="loginForm">
            <input
              type="email"
              placeholder="Type email"
              onChange={(e) => setEmail(e.target.value)}
              alt=""
            />
            <input
              type="password"
              placeholder="Type password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="submitBtn">Login</button>
          </form>
          <p className="signupbtn my-3">
            Don't have an account? <Link to="/signup"><span className="signupbtnspan">Sign up</span></Link>
          </p>
          {error && (
            <div className="errorMessage">
              Wrong credentials! Try different ones
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
