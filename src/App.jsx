import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import LoadingSpinner from './Components/LoadingSpinner';
import AboutUs from './Pages/AboutUs';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import Home from './Pages/Home';
import Founder from './Pages/Founder';
import DevelopmentTeam from './Pages/DevelopmentTeam';
import NavbarLogo from './Components/NavbarLogo';
import StickyIcons from './Components/StickyIcons';
import ContactUs from './Components/Contact';
import './Styles/black-theme-override.css';


export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating an API call or some asynchronous operation
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Hide the loader after 3 seconds
    }, []);

    return (
        <Router>
        <StickyIcons/>
          <NavbarLogo/>
            <Navbar />
            <div className="App">
                {loading ? (
                    <LoadingSpinner />
                ) : (
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/AboutUs" element={<AboutUs />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/ContactUs" element={<ContactUs />} />
                        <Route path="/founder" element={<Founder />} />
                        <Route path="/development-team" element={<DevelopmentTeam />} />
                    </Routes>
                )}
            </div>
        </Router>
    );
}