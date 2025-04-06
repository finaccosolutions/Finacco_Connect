import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Download, Moon, Sun } from 'lucide-react';
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
import Buy from './pages/Buy';
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
            <Route path="/buy" element={<Buy />} />
          </Routes>
          
          {/* WhatsApp Fixed Button */}
          <a
            href="https://wa.me/919745524438?text=Hi,%20I%20need%20help%20with%20Business%20Bugs%20Connect%20Software."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transform hover:scale-110 transition-all duration-300 group z-50"
            aria-label="Contact us on WhatsApp"
          >
            <div className="relative flex items-center">
              <span className="absolute right-full mr-3 px-2 py-1 bg-white text-gray-700 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                Chat with us
              </span>
              <svg viewBox="0 0 24 24" className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-[#25D366] rounded-full animate-ping"></span>
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-[#25D366] rounded-full"></span>
            </div>
          </a>
          <ScrollToTop />
        </div>
      </div>
    </Router>
  );
}

export default App