import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes, 
  Route,
  Link
} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import DayPassPage from './pages/daypass';
import Promociones from './pages/promociones';
import Escuela from './pages/escuela';
import Sms from './pages/sms';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} exact />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/daypass" element={<DayPassPage />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/escuelaavimaq" element={<Escuela />} />
        <Route path="/sms" element={<Sms />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
