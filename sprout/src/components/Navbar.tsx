import { FC } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar: FC = () => (
  <nav className="entire-nav">
    <div className="top-left">
      <Link className="logo-link" to="/">
        <span className="logo-name">Sprout</span>
      </Link>
    </div>
    <div className="middle-nav">
      <div className="dropdown">
        <button className="dropdown-btn">Learn</button>
        <div className="dropdown-content">
          <Link className="about-link" to="/">
            <span>About Us</span>
          </Link>
        </div>
      </div>
    </div>
    <div className="top-right">
      <span>
        <Link className="login-link" to="/login">
          <span>Login</span>
        </Link>
        <Link className="reg-link" to="/register">
          <span>Register</span>
        </Link>
      </span>
    </div>
    <div className="dark-mode">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </div>
  </nav>
);

export default Navbar;
