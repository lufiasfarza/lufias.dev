import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Don't show navigation on app-ads.txt page
  if (location.pathname === '/app-ads.txt') {
    return null;
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">FLUX VPN</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Features
            </Link>
            <Link to="/#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/flux-vpn-privacy" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Privacy
            </Link>
            <a href="/#download" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">
              Download
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/#features" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Features
              </Link>
              <Link to="/#pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Pricing
              </Link>
              <Link to="/flux-vpn-privacy" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Privacy
              </Link>
              <a href="/#download" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium">
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;