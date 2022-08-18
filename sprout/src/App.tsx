import React, { useContext } from "react";
import './App.css';
import Main from './components/Main';
import { ThemeContext } from "./ThemeContext";

function App() {
  
  const themes = React.useContext(ThemeContext);

  return (
    <div className="App" style={{
      borderColor: "black",
      ...themes.light
    }}>
      <Main
  />
    </div>
  );
}

export default App;
