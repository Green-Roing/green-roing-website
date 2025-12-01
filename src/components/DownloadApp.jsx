"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Recycle,
  Truck,
  DollarSign,
  Star,
  Smartphone,
  Download,
  MessageCircle,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const DownloadApp = () => {
  const [loading, setLoading] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [testFlightLoading, setTestFlightLoading] = useState(false);
  const [appLoading, setAppLoading] = useState(false);
  const downloadRef = useRef(null);

  const handleAndroidDownload = () => {
    setLoading(true);

    setTimeout(() => {
      downloadRef.current.click();
      setLoading(false);
    }, 600); // Show loader briefly before triggering download
  };

  return (
    <section
      id="download"
      className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <Smartphone className="h-16 w-16 mx-auto md:mx-0 mb-6" />
          <h2 className="text-4xl font-bold mb-4">Download Our Beta App</h2>
          
          {/* Beta Promotion */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-yellow-200">Join Our Beta Program</h3>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>You're about to download the beta version of our GreenRoing mobile application.</p>
              <p>This app is currently under official production review and not yet published on the Google Play Store or Apple App Store.</p>
              <p>Because this APK is shared directly, your device or browser may show warnings like <span className="font-semibold text-yellow-200">"This file may be harmful"</span> — but don't worry! This is a common message for all apps installed outside the Play Store.</p>
              <p>We assure you that the file is <span className="font-semibold">safe, secure, and provided directly by our development team.</span></p>
              <p>By installing this beta version, you help us improve the platform. We truly appreciate your support, trust, and valuable feedback as we shape the future of GreenRoing.</p>
            </div>
          </div>
          
          <p className="text-lg mb-8 max-w-xl">
            Experience our waste management platform - schedule pickups, connect with recyclers, and contribute to a sustainable future
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">

            <a
              ref={downloadRef}
              href="https://github.com/GreenRoing/gr-app/releases/download/v0.0.9/GreenRoing.apk"
              download
              className="hidden"
            ></a>

            {/* Android Button With Loader */}
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-6 flex items-center"
              onClick={handleAndroidDownload}
              disabled={loading}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-t-transparent border-white mr-2"></div>
                  Downloading...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-5 w-5" />
                  Download for Android
                </>
              )}
            </Button>

            {/* iOS Button */}
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => setShowIOSModal(true)}
            >
              <Download className="mr-2 h-5 w-5" />
              Download for iOS
            </Button>
          </div>
        </motion.div>

        {/* Right: App Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/appImage.jpg"
            alt="App Preview"
            className="w-full max-w-sm md:max-w-md rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* iOS Download Modal */}
      {showIOSModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full relative">
            <button
              onClick={() => setShowIOSModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="p-6">
              <h2 className="text-center text-xl font-bold text-gray-900 mb-6">
                Download Green Roing for iOS
              </h2>
              
              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">Download TestFlight</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      First, install TestFlight from the App Store
                    </p>
                    <button
                      onClick={() => {
                        setTestFlightLoading(true);
                        setTimeout(() => {
                          window.open('https://apps.apple.com/in/app/testflight/id899247664', '_blank');
                          setTestFlightLoading(false);
                        }, 800);
                      }}
                      disabled={testFlightLoading}
                      className="inline-flex items-center px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-200 disabled:opacity-50"
                    >
                      {testFlightLoading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-t-transparent border-blue-500 mr-2"></div>
                      ) : (
                        <img src="/apple-app-store-icon.png" alt="TestFlight" className="w-5 h-5 mr-2" />
                      )}
                      {testFlightLoading ? 'Opening...' : 'Get TestFlight'}
                    </button>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">Install Green Roing</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Then, use this link to install our app via TestFlight
                    </p>
                    <button
                      onClick={() => {
                        setAppLoading(true);
                        setTimeout(() => {
                          window.open('https://testflight.apple.com/join/gucdwdU8', '_blank');
                          setAppLoading(false);
                        }, 800);
                      }}
                      disabled={appLoading}
                      className="inline-flex items-center px-4 py-2 border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-50 hover:scale-105 transition-all duration-200 disabled:opacity-50"
                    >
                      {appLoading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-t-transparent border-green-500 mr-2"></div>
                      ) : (
                        <img src="/grLogo.png" alt="Green Roing" className="w-5 h-5 mr-2" />
                      )}
                      {appLoading ? 'Opening...' : 'Install App'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DownloadApp;
