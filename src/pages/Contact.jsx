import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
} from "lucide-react";
import MapCard from "../components/MapCard";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    title: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        contact: "",
        title: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <Badge variant="secondary" className="w-fit mx-auto">
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact Us
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
            Get In <span className="text-primary">Touch</span> With Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a query, need assistance, or want to partner with us? We’re
            just a message away.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card className="border-border shadow-lg">
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground">
                    Our team will get back to you shortly.
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
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact">Contact No *</Label>
                      <Input
                        id="contact"
                        name="contact"
                        type="text"
                        placeholder="Enter your phone number"
                        value={formData.contact}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      name="title"
                      type="text"
                      placeholder="Message title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
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

          {/* Contact Cards */}
          <div className="grid grid-cols-1 gap-6">
            <Card className="border-border hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        123 Scrap Street", "Green City, Mumbai, India123 Scrap
                        Street", "Green City, Mumbai, India
                      </p>
                    </div>
                    <div className=" flex flex-row items-center gap-2">
                      <Mail className="h-6 w-6 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Email :thealoksinghh@gmail.com{" "}
                      </p>
                    </div>
                    <div className=" flex flex-row items-center gap-2">
                      <Phone className="h-6 w-6 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Phone :+91 9708571269{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <MapCard
              title="Head Office"
              coordinates={{ lat: 19.076, lng: 72.8777 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
