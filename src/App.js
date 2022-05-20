import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Join from './pages/Join';
import Login from './pages/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  );
};

export default App;
