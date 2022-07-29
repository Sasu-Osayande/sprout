import { FC } from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";

import Navbar from "./Navbar";

const Homepage: FC = () => (
  <div className="homepage">
    <Navbar />
    <div className="hmpg-title sun"></div>
    <div className="divider"></div>
    <div className="hmpg-title sky"></div>
    <div className="divider"></div>
    <div className="hmpg-title water"></div>
    <div className="divider"></div>
    <div className="hmpg-title soil"></div>
  </div>
);

export default Homepage;
