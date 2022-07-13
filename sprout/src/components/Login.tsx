import { FC } from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login: FC = () => (
  <div>
    <header>Login</header>
    <div>
      <form>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <Link to="/feed">
        <button type="submit">Login</button>
        </Link>
      </form>
    </div>
  </div>
);

export default Login;
