import React from 'react';

const FluxVPNPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <h2 className="text-xl text-blue-600 font-semibold mb-2">FLUX VPN</h2>
            <p className="text-sm text-gray-500 bg-gray-100 inline-block px-4 py-2 rounded-full">
              Last Updated: August 24, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-8 py-12">

            {/* Introduction */}
            <section className="mb-12">
              <div className="bg-blue-600 text-white p-6 rounded-xl mb-6">
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <span className="mr-3">🛡️</span>
                  Introduction
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  FLUX VPN (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our VPN mobile application and related services.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white mr-4">📊</span>
                Information We Collect
              </h3>
              
              <div className="space-y-6">
                {/* Personal Information */}
                <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-xl">
                  <h4 className="text-lg font-bold text-green-800 mb-4">1. Personal Information</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Google Play account information for subscription management
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Email address (if provided for support)
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Device identifiers for advertising purposes
                    </li>
                  </ul>
                </div>

                {/* Technical Information */}
                <div className="border-l-4 border-blue-500 bg-blue-50 p-6 rounded-r-xl">
                  <h4 className="text-lg font-bold text-blue-800 mb-4">2. Technical Information</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Device type, operating system version
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      App version and usage statistics
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Connection timestamps and data transfer amounts
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      IP address (only for connection purposes, not logged)
                    </li>
                  </ul>
                </div>

                {/* VPN Traffic */}
                <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-xl">
                  <h4 className="text-lg font-bold text-red-800 mb-4">3. VPN Traffic</h4>
                  <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-4">
                    <p className="text-red-800 font-bold flex items-center">
                      <span className="mr-2">🚫</span>
                      We do NOT collect, log, or store:
                    </p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start text-gray-700">
                      <span className="text-red-500 mr-3 font-bold">✗</span>
                      Your browsing history or website visits
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-red-500 mr-3 font-bold">✗</span>
                      DNS queries or requests
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-red-500 mr-3 font-bold">✗</span>
                      Content of your internet traffic
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="text-red-500 mr-3 font-bold">✗</span>
                      Source IP addresses when connected to VPN
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white mr-4">🔧</span>
                How We Use Your Information
              </h3>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🌐</span>
                    <h4 className="font-bold text-blue-800">Service Operation</h4>
                  </div>
                  <p className="text-gray-600">To provide and maintain VPN connectivity</p>
                </div>
                
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">💳</span>
                    <h4 className="font-bold text-green-800">Subscription Management</h4>
                  </div>
                  <p className="text-gray-600">To process payments and manage premium features</p>
                </div>
                
                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📈</span>
                    <h4 className="font-bold text-purple-800">App Improvement</h4>
                  </div>
                  <p className="text-gray-600">To analyze usage patterns and improve performance</p>
                </div>
                
                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📺</span>
                    <h4 className="font-bold text-orange-800">Advertising</h4>
                  </div>
                  <p className="text-gray-600">To show relevant ads in the free version</p>
                </div>
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white mr-4">🤝</span>
                Third-Party Services
              </h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Google Play Services</h4>
                  <p className="text-gray-700">
                    We use Google Play Billing for subscription management and Google Play Services for app functionality. Google&apos;s privacy policy applies to their data collection.
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-yellow-800 mb-3">Advertising Partners</h4>
                  <p className="text-gray-700 mb-4">We partner with advertising networks including:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      <strong>Google AdMob:</strong> For displaying ads in the free version
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      <strong>Meta Audience Network:</strong> For mediated advertising
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                      <strong>AppLovin:</strong> For advertising mediation
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4 text-sm">
                    These partners may collect device identifiers and usage data for ad personalization. You can opt out of personalized advertising in your device settings.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white mr-4">🔒</span>
                Data Security
              </h3>
              
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your information:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    WireGuard protocol for secure VPN connections
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Encrypted data transmission
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Regular security audits and updates
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Limited data retention policies
                  </li>
                </ul>
              </div>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white mr-4">⏰</span>
                Data Retention
              </h3>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6">
                  <h4 className="font-bold text-teal-800 mb-2">Connection logs</h4>
                  <p className="text-gray-600">Automatically deleted after 24 hours</p>
                </div>
                
                <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6">
                  <h4 className="font-bold text-teal-800 mb-2">Usage statistics</h4>
                  <p className="text-gray-600">Aggregated data retained for service improvement</p>
                </div>
                
                <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6">
                  <h4 className="font-bold text-teal-800 mb-2">Account information</h4>
                  <p className="text-gray-600">Retained while subscription is active</p>
                </div>
                
                <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-6">
                  <h4 className="font-bold text-teal-800 mb-2">Support communications</h4>
                  <p className="text-gray-600">Retained for 2 years or as legally required</p>
                </div>
              </div>
            </section>

            {/* Geographic Focus */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white mr-4">🌏</span>
                Geographic Considerations
              </h3>
              
              <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-6">
                <p className="text-gray-700">
                  FLUX VPN primarily serves users in <strong>Malaysia, Singapore, and Indonesia</strong>. Our Singapore server is optimized for low latency connections in this region. Data processing occurs in accordance with applicable local privacy laws.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-10 bg-violet-500 rounded-lg flex items-center justify-center text-white mr-4">⚖️</span>
                Your Privacy Rights
              </h3>
              
              <div className="bg-violet-50 border-2 border-violet-200 rounded-xl p-6">
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Access your personal information
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Request correction of inaccurate data
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Request deletion of your data
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Opt out of personalized advertising
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Withdraw consent for data processing
                  </li>
                </ul>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white mr-4">👶</span>
                Children&apos;s Privacy
              </h3>
              
              <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
                <p className="text-gray-700">
                  FLUX VPN is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.
                </p>
              </div>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white mr-4">🔄</span>
                Changes to This Privacy Policy
              </h3>
              
              <div className="bg-cyan-50 border-2 border-cyan-200 rounded-xl p-6">
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the app and updating the &ldquo;Last Updated&rdquo; date above.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white mr-4">📧</span>
                Contact Us
              </h3>
              
              <div className="bg-indigo-600 text-white rounded-2xl p-8">
                <p className="text-indigo-100 mb-6">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                
                <div className="bg-white bg-opacity-10 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4">FLUX VPN Support</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">✉️</span>
                      <div>
                        <span className="font-semibold">Email: </span>
                        <a href="mailto:support@lufias.dev" className="text-indigo-200 hover:text-white underline">
                          support@lufias.dev
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">🌐</span>
                      <div>
                        <span className="font-semibold">Website: </span>
                        <a href="https://lufias.dev" className="text-indigo-200 hover:text-white underline">
                          https://lufias.dev
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-white px-8 py-4 rounded-full shadow-lg border border-gray-200">
            <span className="text-gray-600">Made with</span>
            <span className="mx-2 text-red-500 text-xl">❤️</span>
            <span className="text-gray-600">for your privacy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FluxVPNPrivacyPolicy;