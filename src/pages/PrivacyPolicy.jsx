import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from "lucide-react"

function PrivacyPolicy() {
  return (
    <div id="privacypolicy" className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="w-fit mx-auto">
            <Shield className="h-4 w-4 mr-2" />
            Privacy Policy
          </Badge>
          <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">We collect information you provide directly to us, such as:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Personal information (name, email, phone number)</li>
                <li>Scrap collection requests and service preferences</li>
                <li>Payment and transaction information</li>
                <li>Communication records and feedback</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide and improve our scrap collection services</li>
                <li>Process payments and manage your account</li>
                <li>Communicate with you about services and updates</li>
                <li>Ensure safety and security of our platform</li>
                <li>Comply with legal obligations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                Data Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. Your data is encrypted and stored securely.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-primary" />
                Your Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>File a complaint with regulatory authorities</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@greenroing.com
                <br />
                Phone: +91 98765 43210
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy