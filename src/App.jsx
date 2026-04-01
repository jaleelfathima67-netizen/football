import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Charities from './pages/Charities';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Pricing from './pages/Pricing';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/charities" element={<Charities />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/subscribe" element={<Pricing />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
