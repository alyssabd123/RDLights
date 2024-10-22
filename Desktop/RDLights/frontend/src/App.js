import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';

// pages and components
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className = "pages">
          <Routes>
            <Route 
              path = "/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
