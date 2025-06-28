import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Chat from './pages/Chat';
import FAQCategories from './pages/FAQCategories';
import FAQServices from './pages/FAQServices';
import FAQPricing from './pages/FAQPricing';
import FAQAppointments from './pages/FAQAppointments';
import SessionEnd from './pages/SessionEnd';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-800 font-body">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/faq" element={<FAQCategories />} />
          <Route path="/faq/services" element={<FAQServices />} />
          <Route path="/faq/pricing" element={<FAQPricing />} />
          <Route path="/faq/appointments" element={<FAQAppointments />} />
          <Route path="/session-end" element={<SessionEnd />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
