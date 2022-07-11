import { FC } from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";

const Homepage: FC = () => (
  <div className="homepage">
    <div className="hmpg-title sun">
      <header>Sprout</header>
      <span>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </span>
    </div>
    <div className="divider"></div>
    <div className="hmpg-title sky"></div>
    <div className="divider"></div>
    <div className="hmpg-title water"></div>
    <div className="divider"></div>
    <div className="hmpg-title soil"></div>
  </div>
);

export default Homepage;
