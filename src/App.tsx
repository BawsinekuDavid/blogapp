// App.tsx
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from './pages/Settings';
import Write from './pages/write';
import Single from './pages/Single';
 
 

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="home" element={<Home />}>
          <Route index element={<Home />} />         
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path='settings' element={<Settings/>} />
        <Route path='write' element={<Write/>} />
        <Route path='single' element={<Single/>} />
      </Routes>
    </Router>

  );
};

export default App;
