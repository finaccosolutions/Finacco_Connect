import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Download, Moon, Sun, MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Pricing from './pages/Pricing';
import DownloadPage from './pages/Download';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import UserGuide from './pages/UserGuide';
import VideoTutorials from './pages/VideoTutorials';
import Templates from './pages/Templates';
import Updates from './pages/Updates';
import Documentation from './pages/Documentation';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
        <div className="bg-white dark:bg-gray-900 min-h-screen">
          <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/guide" element={<UserGuide />} />
            <Route path="/tutorials" element={<VideoTutorials />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/docs" element={<Documentation />} />
          </Routes>
          
          {/* WhatsApp Fixed Button */}
          <a
            href="https://wa.me/919745524438?text=Hi,%20I%20need%20help%20with%20Business%20Bugs%20Connect%20Software."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 hover:rotate-12 transform transition-all duration-300 ease-in-out z-50 hover:shadow-xl"
          >
            <MessageCircle size={24} />
          </a>
          <ScrollToTop />
        </div>
      </div>
    </Router>
  );
}

export default App;