import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Join from './pages/Join';
import Login from './pages/Login';
import Home from './pages/Home';
import MyInfo from './pages/MyInfo';
import MyBasket from './pages/MyBasket';
import Write from './pages/Write';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/mybasket" element={<MyBasket />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </>
  );
};

export default App;
