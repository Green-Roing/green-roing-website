import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Truck,
  Calculator,
  HeadphonesIcon,
} from "lucide-react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Scrap Street, Green City", "Mumbai, Maharashtra 400001", "India"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 98765 43210", "+91 98765 43211", "Mon-Sat: 9AM-7PM"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@scrapbiz.com", "support@scrapbiz.com", "sales@scrapbiz.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Saturday", "9:00 AM - 7:00 PM", "Sunday: Emergency Only"],
    },
  ]

  const services = [
    { value: "pickup", label: "Schedule Pickup" },
    { value: "quote", label: "Get Quote" },
    { value: "bulk", label: "Bulk Collection" },
    { value: "partnership", label: "Business Partnership" },
    { value: "support", label: "Customer Support" },
    { value: "other", label: "Other Inquiry" },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Us
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
              Get In <span className="text-primary">Touch</span> With Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Ready to turn your scrap into cash? Have questions about our services? Our team is here to help you every
              step of the way. Reach out to us today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Send Message
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Fill out the form below and we'll get back to you within 24 hours. Our team is ready to assist you
                  with all your scrap recycling needs.
                </p>
              </div>

              <Card className="border-border">
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-8 space-y-4">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="border-border"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your scrap recycling needs..."
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="border-border"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Contact Information
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                  Multiple Ways to Reach Us
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Choose the most convenient way to get in touch with our team. We're available through multiple
                  channels to serve you better.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-foreground">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact