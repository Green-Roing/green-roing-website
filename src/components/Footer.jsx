"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Leaf, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Download } from "lucide-react"

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  const services = [
    { name: "Metal Scrap Collection", href: "/portfolio" },
    { name: "Plastic Waste Pickup", href: "/portfolio" },
    { name: "Paper Recycling", href: "/portfolio" },
    { name: "E-Waste Management", href: "/portfolio" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Green Roing</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading scrap collection service committed to environmental sustainability. We turn your waste into wealth
              while protecting our planet.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@scrapbiz.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Scrap Street, Green City, Earth</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-300 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={service.href} className="text-gray-300 hover:text-primary transition-colors text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* App Download & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <div className="space-y-4">
              <Button className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download App
              </Button>
              <div>
                <p className="text-sm text-gray-300 mb-3">Follow us on social media</p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        aria-label={social.name}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 Green Roing. All rights reserved. | Turning waste into wealth sustainably.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
