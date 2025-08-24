import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import FluxVPNPrivacyPolicy from './components/FluxVPNPrivacyPolicy'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* Navigation Header */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-900">
                lufias.dev
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                to="/" 
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link 
                to="/flux-vpn-privacy" 
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                FLUX VPN Privacy
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flux-vpn-privacy" element={<FluxVPNPrivacyPolicy />} />
          <Route path="/privacy" element={<FluxVPNPrivacyPolicy />} />
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

// 404 Component
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-gray-600 mb-4">Page not found</p>
        <Link 
          to="/" 
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default App