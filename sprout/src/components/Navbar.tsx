import { FC } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => (
  <div>
    <div className="top-right">
      <span>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </span>
    </div>
  </div>
);

export default Navbar;
