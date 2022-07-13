import React from "react";
import { Routes, Route } from 'react-router-dom';

import Homepage from "./Homepage";
import Login from "./Login";
import Register from "./Register";
import Feed from "./Feed";

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/feed' element={<Feed />} />
    </Routes>
  );
}

export default Main;