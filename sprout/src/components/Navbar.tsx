import { FC } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => (
  <nav className="entire-nav">
    <div className="top-left">
      <Link className="logo-link" to="/">
        <span className="logo-name">Sprout</span>
      </Link>
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
  </nav>
);

export default Navbar;
