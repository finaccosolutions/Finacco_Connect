import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Moon, Sun, FileSpreadsheet, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="h-10 w-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                <div className="relative">
                  <FileSpreadsheet className="h-6 w-6 text-white animate-pulse" />
                  <div className="absolute inset-0 bg-white opacity-20 animate-ping rounded-lg"></div>
                </div>
              </div>
              <span className="ml-2.5 text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Finacco Connect
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/download"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 relative group px-3 py-2 text-sm font-medium"
            >
              Download
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 relative group px-3 py-2 text-sm font-medium"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="/login"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 relative group px-3 py-2 text-sm font-medium"
            >
              Login
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-110"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-1.5 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 mr-1"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-1.5 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2">
              <Link
                to="/download"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 w-full transition-colors duration-300"
              >
                Download
              </Link>
              <Link
                to="/contact"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 w-full transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 w-full transition-colors duration-300"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;