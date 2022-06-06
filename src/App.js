import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Join from './pages/Join';
import Login from './pages/Login';
import Home from './pages/Home';

export const LoginContext = React.createContext();

const App = () => {
  const [login, setLogin] = useState({
    isLogin: false,
    loginName: '',
  });

  return (
    <LoginContext.Provider value={login}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </LoginContext.Provider>
  );
};

export default App;
