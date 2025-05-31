import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BusinessDetail from './pages/BusinessDetail';
import AddListing from './pages/AddListing';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/10 to-teal-50/10">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/business/:id" element={<BusinessDetail />} />
            <Route path="/add-listing" element={<AddListing />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App