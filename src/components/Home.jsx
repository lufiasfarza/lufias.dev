import React, { useState } from 'react';

const FluxVPNLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-xl font-bold text-gray-900">FLUX VPN</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#features" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</a>
                <a href="#download" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all">Download</a>
              </div>
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
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                <a href="#features" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Features</a>
                <a href="#pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium">Pricing</a>
                <a href="#download" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium">Download</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Lightning Fast VPN for
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Southeast Asia</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect to Singapore servers with ultra-low latency. Optimized for Malaysia, Singapore, and Indonesia users.
              </p>
              
              {/* Key Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">⚡</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">&lt;20ms</div>
                    <div className="text-sm text-gray-600">Ping to SG</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">🔒</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">No Logs</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold">🚀</span>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">1-Tap</div>
                    <div className="text-sm text-gray-600">Connect</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
                  Download for Android
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-50 transition-colors">
                  Try Free Version
                </button>
              </div>
            </div>

            {/* Hero Image/Mockup */}
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform">
                <div className="bg-white rounded-xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                        <span className="text-white font-bold text-sm">F</span>
                      </div>
                      <span className="font-bold text-gray-900">FLUX VPN</span>
                    </div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-gray-900 mb-2">Singapore</div>
                    <div className="text-green-600 font-semibold">Connected • 18ms</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-blue-600">↓ 125.3</div>
                      <div className="text-sm text-gray-600">Mbps</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">↑ 89.7</div>
                      <div className="text-sm text-gray-600">Mbps</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FLUX VPN?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for Southeast Asian users who need fast, reliable, and secure internet access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ultra-Low Latency</h3>
              <p className="text-gray-600">
                Optimized Singapore servers deliver &lt;20ms ping for gaming and streaming. Perfect for MY/SG/ID users.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Zero-Log Policy</h3>
              <p className="text-gray-600">
                We don't track, log, or store your browsing history. Your online activity remains completely private.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">One-Tap Connect</h3>
              <p className="text-gray-600">
                Simple, intuitive interface. Connect to VPN with just one tap. No complicated setup required.
              </p>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl mr-3">🛡️</span>
              <div>
                <div className="font-semibold text-gray-900">WireGuard Protocol</div>
                <div className="text-sm text-gray-600">Latest encryption</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl mr-3">📶</span>
              <div>
                <div className="font-semibold text-gray-900">Auto-Reconnect</div>
                <div className="text-sm text-gray-600">Always protected</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl mr-3">🔄</span>
              <div>
                <div className="font-semibold text-gray-900">Kill Switch</div>
                <div className="text-sm text-gray-600">Premium feature</div>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl mr-3">📺</span>
              <div>
                <div className="font-semibold text-gray-900">Ad-Free Premium</div>
                <div className="text-sm text-gray-600">No interruptions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start free, upgrade when you need more speed and features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">RM 0</div>
                <div className="text-gray-600">Forever</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Singapore server access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Basic speed (up to 50 Mbps)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">Watch ads for extra time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="text-gray-700">No-log policy</span>
                </li>
              </ul>
              
              <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                Download Free
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white relative">
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="text-4xl font-bold mb-2">
                  RM 9.90
                  <span className="text-lg font-normal opacity-75">/month</span>
                </div>
                <div className="text-blue-100">7 days free trial</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-300 mr-3 mt-1">✓</span>
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-3 mt-1">✓</span>
                  <span>Unlimited high-speed connection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-3 mt-1">✓</span>
                  <span>No ads, no interruptions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-3 mt-1">✓</span>
                  <span>Kill Switch & Auto-Reconnect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-3 mt-1">✓</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-3 mt-1">✓</span>
                  <span>Early access to new servers</span>
                </li>
              </ul>
              
              <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Download FLUX VPN now and experience the fastest VPN in Southeast Asia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
            <button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center">
              <span className="mr-2 text-xl">📱</span>
              Get it on Google Play
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            Available for Android • iOS coming soon
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-xl font-bold">FLUX VPN</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Lightning-fast VPN optimized for Southeast Asian users. Connect securely to Singapore servers with ultra-low latency.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <span className="text-xl">📧</span>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#download" className="text-gray-400 hover:text-white transition-colors">Download</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="/flux-vpn-privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="mailto:support@lufias.dev" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/app-ads.txt" className="text-gray-400 hover:text-white transition-colors">App-ads.txt</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 FLUX VPN. Made with ❤️ for Southeast Asia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FluxVPNLanding;