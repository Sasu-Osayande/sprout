import { FC } from "react";
import "./Register.scss";

const Register: FC = () => (
  <div>
    <header>Register</header>
    <div>
      <form>
      <input type="text" placeholder="first name"></input>
      <input type="text" placeholder="last name"></input>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="location"></input>
        <input type="password" placeholder="password"></input>
        <input type="password" placeholder="confirm password"></input>
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
);

export default Register;