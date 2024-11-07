import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// pages and components
import Home from './pages/Home';
import Navbar from './components/Navbar copy'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import DescriptionForm from './components/DescriptionForm'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div className = "pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin-login" element={<AdminLogin />} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
