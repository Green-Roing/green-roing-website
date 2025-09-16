import { useState } from "react"
import { Button } from "@/components/ui/button"
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
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="lg"
          className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 w-14 h-14 p-0"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}

export default Landing