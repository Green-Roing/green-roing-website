import { useRef, useState } from "react";
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
  MessageCircle,
  Send,
  CheckCircle,
  XCircle,
} from "lucide-react";
import MapCard from "../components/MapCard";
import emailjs from "@emailjs/browser";
import { emailKeys } from "../constants/keys";

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

  const validateForm = (form) => {
    const name = form.user_name.value.trim();
    const phone = form.user_phone.value.trim();
    const email = form.user_email.value.trim();
    const message = form.message.value.trim();

    // Regex patterns
    const nameRegex = /^[a-zA-Z\s]{3,50}$/; // only letters & spaces, 3–50 chars
    const phoneRegex = /^[0-9]{10}$/; // 10 digits only
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple email format

    if (!nameRegex.test(name)) {
      window.alert(
        "Please enter a valid full name (only letters, min 3 chars)."
      );
      return false;
    }

    if (!phoneRegex.test(phone)) {
      window.alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    if (!emailRegex.test(email)) {
      window.alert("Please enter a valid email address.");
      return false;
    }

    if (message.length < 5) {
      window.alert("Message must be at least 5 characters long.");
      return false;
    }
    if (message.length > 500) {
      window.alert("Message must be less than 500 characters long.");
      return false;
    }

    return true;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm(form.current)) return;

    setIsSubmitting(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        emailKeys.serviceId,
        emailKeys.templateId,
        form.current,
        { publicKey: emailKeys.publicKey }
      );
      setStatus("success");
      form.current.reset();

      setTimeout(() => setStatus(null), 2000);
    } catch (error) {
      console.error("Failed to send: ", error.text);
      setStatus("error");

      setTimeout(() => setStatus(null), 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="contact" className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-28">
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
              {status === "success" ? (
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
              ) : status === "error" ? (
                <div className="text-center py-10 space-y-4">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <XCircle className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Failed to Send Message
                  </h3>
                  <p className="text-muted-foreground">
                    Please try again later or contact us directly.
                  </p>
                </div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="user_name"
                        type="text"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user_phone">Contact No *</Label>
                      <Input
                        id="user_phone"
                        name="user_phone"
                        type="text"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Email *</Label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="lg:min-h-[220px]"
                      placeholder="Write your message here..."
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

          {/* Contact Info */}
          <div className="grid grid-cols-1 gap-6">
            <Card className="border-border hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Address</h3>
                    <p className="text-sm text-muted-foreground">
                      Reg. Office: C/O Ibi Mepo, Roing Electrical Sub Division Lower
                      Market, Roing, Lower Dibang Valley District-792110, Arunachal
                      Pradesh, India
                    </p>
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        roinggreen@gmail.com
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        +91 8414841234
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
