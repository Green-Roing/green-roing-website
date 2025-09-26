import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, DollarSign, Truck, AlertCircle, Scale } from "lucide-react"

function TermsOfService() {
  return (
    <div id="termscondition" className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="w-fit mx-auto">
            <FileText className="h-4 w-4 mr-2" />
            Terms of Service
          </Badge>
          <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Service Agreement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                By using Green Roing's services, you agree to these terms. We provide scrap collection, 
                recycling, and waste management services to individuals and businesses across India.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Service Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Pickup services are subject to availability and scheduling</li>
                <li>Materials must be properly segregated and accessible</li>
                <li>We reserve the right to refuse hazardous or prohibited materials</li>
                <li>Pricing is based on current market rates and material quality</li>
                <li>Service areas are limited to our operational zones</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Payments are processed within 24-48 hours of collection</li>
                <li>Final pricing is determined after material assessment</li>
                <li>Payment methods include bank transfer and digital wallets</li>
                <li>Disputes must be raised within 7 days of transaction</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Users must:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide accurate information and contact details</li>
                <li>Ensure materials are legally owned and transferable</li>
                <li>Maintain safe access to collection points</li>
                <li>Comply with local waste management regulations</li>
                <li>Not misuse or abuse our services</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Green Roing's liability is limited to the value of materials collected. We are not responsible 
                for indirect damages, lost profits, or consequential losses. Our maximum liability shall not 
                exceed the amount paid for services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Modifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, contact us at:
                <br />
                Email: legal@greenroing.com
                <br />
                Phone: +91 98765 43210
                <br />
                Address: 123 Scrap Street, Green City, Mumbai 400001
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService