import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages and components
import Home from './pages/Home';
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import LayoutWithNavbar from './LayoutWithNavbar'
import LayoutWithoutNavbar from './LayoutWithoutNavbar'
import DescriptionForm from './components/DescriptionForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Navbar */}
        <Route element={<LayoutWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        
        {/* Route without Navbar */}
        <Route element={<LayoutWithoutNavbar />}>
          <Route path="/admin-login" element={<AdminLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
