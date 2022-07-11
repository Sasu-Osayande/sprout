import React from "react";
import { Routes, Route } from 'react-router-dom';

import Homepage from "./Homepage";
import Login from "./Login";

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
}

export default Main;