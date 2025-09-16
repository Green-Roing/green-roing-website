"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (href) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
             <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden">
                <img src="/grLogo.png" alt="Logo" className="w-15 h-15 object-contain" />
              </div>
         
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium transition-colors text-gray-700 hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.href);
                }}
              >
                {item.name}
              </a>
            ))}

            {/* Download App scroll button */}
            <Button
              size="sm"
              className="ml-4"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("#download");
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Download App
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  handleScroll(item.href);
                }}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Download App scroll button */}
            <div className="px-3 py-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  handleScroll("#download");
                }}
                className="flex items-center gap-2 w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              >
                <Download className="h-4 w-4" />
                Download App
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
