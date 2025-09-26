"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Recycle, Truck, DollarSign, Star, Smartphone, Download, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"

const DownloadApp = () => {


    return(
         <section id="download" className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
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
            Get instant quotes, schedule pickups, and track your earnings with our mobile app
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
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
    </section>
    )
}
export default DownloadApp