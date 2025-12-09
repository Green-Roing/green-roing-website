"use client";


import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const DownloadApp = () => {

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
          <h2 className="text-4xl font-bold mb-4">Download Our App</h2>

          <p className="text-xl mb-8 max-w-2xl">
            Experience our waste management platform - schedule pickups, connect
            with recyclers, and contribute to a sustainable future
          </p>

          <div className="flex flex-col sm:flex-row gap-5 md:justify-start justify-center">
            {/* Android Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.greenroing&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-black text-white px-6 py-4 rounded-xl font-bold transition-transform hover:-translate-y-1 shadow-lg"
            >
              <i className="fab fa-google-play text-3xl mr-4"></i>
              <div>
                <div className="text-xs opacity-80">Get it on</div>
                <div className="text-base">Google Play</div>
              </div>
            </a>

            {/* iOS Button */}
            <a
              href="https://apps.apple.com/in/app/green-roing/id6754807826"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-black text-white px-6 py-4 rounded-xl font-bold transition-transform hover:-translate-y-1 shadow-lg"
            >
              <i className="fab fa-apple text-3xl mr-4"></i>
              <div>
                <div className="text-xs opacity-80">Download on the</div>
                <div className="text-base">App Store</div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Right: App Video */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center "
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
            <video
              controls
              className="w-56 h-auto mx-auto rounded-xl shadow-2xl"
              poster="/app-poster.png"
            >
              <source
                src="https://github.com/GreenRoing/gr-app/releases/download/video/androidVideo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>


    </section>
  );
};

export default DownloadApp;
