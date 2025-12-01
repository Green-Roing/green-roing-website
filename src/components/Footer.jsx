"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Download,
} from "lucide-react";

const Footer = () => {
  const handleScroll = (href) => {
    // href should be like "#download", "#home", etc.
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback: if section not found, try to jump (safe fallback)
      window.location.hash = href;
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Metal Scrap Collection", href: "#portfolio" },
    { name: "Plastic Waste Pickup", href: "#portfolio" },
    { name: "Paper Recycling", href: "#portfolio" },
    { name: "E-Waste Management", href: "#portfolio" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://www.facebook.com/people/Ai-Green-Foundation/61565108856666/?mibextid=rS40aB7S9Ucbxw6v",
    },
    // { name: "Twitter", icon: Twitter, href: "#" },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/ai_greenfoundation/?igsh=aDZ4aWczM2tsejk3#",
    },
    // { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-15 h-15 rounded-full bg-white flex items-center justify-center overflow-hidden">
                <img
                  src="/grLogo.png"
                  alt="Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-2xl font-bold">Green Roing</span>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed">
              Leading scrap collection service committed to environmental
              sustainability. We turn your waste into wealth while protecting
              our planet.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+918414841234" className="hover:text-primary">
                  +91 8414841234
                </a>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href="mailto:info@greenroing.com"
                  className="hover:text-primary"
                >
                  roinggreen@gmail.com
                </a>
              </div>

              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>
                  Reg. Office: C/O Ibi Mepo, Roing Electrical Sub Division Lower
                  Market, Roing, Lower Dibang Valley District-792110, Arunachal
                  Pradesh, India
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.href);
                    }}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
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
                  <a
                    href={service.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(service.href);
                    }}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* App Download & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>

            <div className="space-y-4">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#download");
                }}
                className="w-full flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download App
              </Button>

              <div>
                <p className="text-sm text-gray-300 mb-3">
                  Follow us on social media
                </p>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        aria-label={social.name}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
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
              © 2024 Green Roing. All rights reserved. | Turning waste into
              wealth sustainably.
            </p>

            <div className="flex space-x-6 text-sm">
              {/* React Router navigation for real pages */}
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
