import { FC } from "react";
import "./Login.scss";

const Login: FC = () => (
  <div>
    <header>Login</header>
    <div>
      <form>
        <input type="text" placeholder="username"></input>
        <input type="password" placeholder="password"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
);

export default Login;
