import { useState } from "react"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Recycle,
  Truck,
  DollarSign,
  Smartphone,
  Star,
  ArrowRight,
  Leaf,
  Shield,
  Clock,
  Users,
  MessageCircle,
  Target,
  Eye,
  Heart,
  Award,
  TrendingUp,
  CheckCircle,
  Globe,
  Factory,
  Building2,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Send,
} from "lucide-react"
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
function Landing({}) {

  return (
    <div className="flex flex-col">
     
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      {/* WhatsApp Button */}
      {/* Floating WhatsApp Button */}
      <motion.div
        className="fixed bottom-12 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center"
          asChild
        >
          <a
            href="https://wa.me/918414841234"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-10 w-10" />
          </a>
        </Button>
      </motion.div>
    </div>
  )
}

export default Landing