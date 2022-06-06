import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Join from './pages/Join';
import Login from './pages/Login';
import Home from './pages/Home';
import MyInfo from './pages/MyInfo';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/myinfo" element={<MyInfo />} />
    </Routes>
  );
};

export default App;
