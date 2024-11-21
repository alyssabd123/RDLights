import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages and components
import Home from './pages/Home';
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import PoolLights from './pages/PoolLights'
import WallRacks from './pages/WallRacks'
import Installation from './pages/Installation'
import LayoutWithNavbar from './LayoutWithNavbar'
import LayoutWithoutNavbar from './LayoutWithoutNavbar'
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Navbar */}
        <Route element={<LayoutWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pool-lights" element={<PoolLights />} />
          <Route path="/wall-racks" element={<WallRacks />} />
          <Route path="/installation" element={<Installation />} />
        </Route>
        
        {/* Route without Navbar */}
        <Route element={<LayoutWithoutNavbar />}>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
