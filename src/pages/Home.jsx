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
import {
  Recycle,
  Truck,
  DollarSign,
  Star,
  Smartphone,
  Download,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import DownloadApp from "../components/DownloadApp";

const Home = () => {

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
  const services = [
    {
      icon: <Truck className="h-12 w-12 text-primary" />,
      title: "Scrap Collection",
      description:
        "We collect all types of scrap materials from your doorstep with our professional team and modern vehicles.",
    },
    {
      icon: <Recycle className="h-12 w-12 text-primary" />,
      title: "Recycling",
      description:
        "Advanced recycling processes that transform your scrap into valuable resources while protecting the environment.",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-primary" />,
      title: "Selling",
      description:
        "Get the best market rates for your scrap materials with transparent pricing and instant payments.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      rating: 5,
      comment:
        "Green Roing provided excellent service! They collected all my old electronics and gave me a fair price. Highly recommended!",
    },
    {
      name: "Priya Sharma",
      rating: 5,
      comment:
        "Very professional team. They arrived on time and handled everything efficiently. Great experience with Green Roing!",
    },
    {
      name: "Amit Patel",
      rating: 5,
      comment:
        "Best scrap collection service in the city. Fair pricing and eco-friendly approach. Will definitely use again!",
    },
  ];

  return (
    <div id="home" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-100 py-20 px-4">
        <div className="max-w-7xl min-h-screen mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="text-primary">Green Roing</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
              Turn Your Scrap Into Cash
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl">
              Professional scrap collection and recycling services. We help you
              convert your waste materials into valuable resources while
              contributing to a cleaner environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <Button
               onClick={(e) => {
                  e.preventDefault();
                  handleScroll("#contact");
                }}
              asChild size="lg" className="text-lg px-8 py-6">
                <Link to="#contact">Contact Us</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="/homeImage.png"
              alt="Green Roing Hero"
              className="w-full max-w-xl md:max-w-2xl object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive scrap management solutions for individuals and
              businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <DownloadApp />

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Trusted by thousands of satisfied customers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">
                      "{testimonial.comment}"
                    </p>
                    <p className="font-semibold text-gray-900">
                      - {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          size="lg"
          className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg"
          asChild
        >
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-10 w-10" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;
