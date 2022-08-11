import { FC } from "react";
import { Link } from "react-router-dom";
// import { createContext, useState } from "react";
import {createGlobalStyle, css} from "styled-components";
import "./Login.scss";

import Navbar from "./Navbar";

interface Props {
  theme: string
}

// use the createGlobalStyles function to define colours and apply them conditionally
export const GlobalStyles = createGlobalStyle(
  (props: Props) => css`
    :root {
      --color-dark: hsl(0, 0%, 10%);
      --color-light: hsl(0, 0%, 95%);
    }

    body {
      background-color: ${props.theme === "light" ? "var(--color-light)" : "var(--color-dark)"};
      color: ${props.theme === "light" ? "var(--color-dark)" : "var(--color-light)"};
    }
  `,
)

// export const ThemeContext = createContext(null);

function Login() {
  // const [theme, setTheme] = useState("light")

  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };
  return (
  // <ThemeContext.Provider value={{ theme, toggleTheme }}>
  <div id="light">
    <Navbar />
    <header className="login-title">Login</header>
    <div className="login-whole-container">
      <div className="login-form-container">
        <form className="login-form">
          <input className="login-input" type="text" placeholder="username"></input>
          <input className="login-input" type="password" placeholder="password"></input>
          <div className="login-form-btn">
            <Link to="/feed">
              <button className="login-btn" type="submit">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  // </ThemeContext.Provider>
);
  }

export default Login;
