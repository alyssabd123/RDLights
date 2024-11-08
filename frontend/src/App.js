import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages and components
import Home from './pages/Home';
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import LayoutWithNavbar from './LayoutWithNavbar'
import LayoutWithoutNavbar from './LayoutWithoutNavbar'
import PoolLights from './pages/PoolLights'
import WallRacks from './pages/WallRacks'
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
