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
import Service from './pages/service';
import Oma from './pages/oma';
import Fumigacion from './pages/fumigacion';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} exact />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/daypass" element={<DayPassPage />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/escuelaavimaq" element={<Escuela />} />
        <Route path="/services" element={<Service />} />
        <Route path="/sms" element={<Sms />} />
        <Route path="/oma" element={<Oma />} />
        <Route path="/fumigacion" element={<Fumigacion />} />
        
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
