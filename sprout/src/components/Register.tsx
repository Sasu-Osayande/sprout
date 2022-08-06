import { FC } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

import Navbar from "./Navbar";

const Register: FC = () => (
  <div>
    <Navbar />
    <header className="register-title">Register</header>
    <div className="reg-whole-container">
      <div className="reg-form-container">
        <form className="register-form">
          <input className="reg-input" type="text" placeholder="first name"></input>
          <input className="reg-input" type="text" placeholder="last name"></input>
          <input className="reg-input" type="text" placeholder="username"></input>
          <input className="reg-input" type="text" placeholder="location"></input>
          <input className="reg-input" type="password" placeholder="password"></input>
          <input className="reg-input" type="password" placeholder="confirm password"></input>
          <div className="register-form-btn">
            <Link to="/feed">
              <button className="register-btn" type="submit">
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Register;
