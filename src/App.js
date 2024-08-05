import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Details from './components/Details';
import Roadmap from './components/Roadmap';
import YouTube from './components/YouTube';
import About from './components/About';
import Footer from './components/Footer';
// import AnalyticsData from './components/AnalyticsData';
import ComingSoon from './components/ComingSoon';
import Resources from './components/Resources'; // Import the new component
import materials from './data/materials.json';
import { SpeedInsights } from "@vercel/speed-insights/react"
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMaterials = Object.keys(materials)
    .filter((key) => key.toLowerCase().includes(searchTerm.toLowerCase()))
    .reduce((obj, key) => {
      obj[key] = materials[key];
      return obj;
    }, {});

  return (
    <Router>
      <div className="App">
        <Navbar />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-box"
        />
        <Routes>
          <Route exact path="/" element={<Section data={filteredMaterials} />} />
          <Route path="/details/:index" element={<Details />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/youtube" element={<YouTube />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} /> {/* Add this route */}
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
