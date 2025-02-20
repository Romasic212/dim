import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookOpen, BrainCircuit, Clock, FlaskConical, Heart, History as HistoryIcon, Languages } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Math from './pages/Math';
import Informatics from './pages/Informatics';
import HistoryPage from './pages/History';
import Russian from './pages/Russian';
import Physics from './pages/Physics';
import LifeSafety from './pages/LifeSafety';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/math" element={<Math />} />
          <Route path="/informatics" element={<Informatics />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/russian" element={<Russian />} />
          <Route path="/physics" element={<Physics />} />
          <Route path="/life-safety" element={<LifeSafety />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;