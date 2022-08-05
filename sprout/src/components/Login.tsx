import { FC } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

import Navbar from "./Navbar";

const Login: FC = () => (
  <div>
    <Navbar />
    <header className="login-title">Login</header>
    <div className="whole-container">
    <div className="form-container">
      <form className="login-form">
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <div className="login-form-btn">
        <Link to="/feed">
        <button className="login-btn" type="submit">Login</button>
        </Link>
        </div>
      </form>
    </div>
    </div>
  </div>
);

export default Login;
