import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Leaf,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
  Globe,
  Recycle,
} from "lucide-react"

function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Heart className="h-4 w-4 mr-2" />
              About ScrapBiz
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
              Transforming Waste Into <span className="text-primary">Wealth</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Since 2018, ScrapBiz has been at the forefront of sustainable recycling solutions, helping individuals and
              businesses turn their scrap materials into valuable resources while protecting our planet.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Our Purpose
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center text-pretty leading-relaxed">
                  To revolutionize the recycling industry by providing convenient, profitable, and environmentally
                  responsible scrap management solutions that empower individuals and businesses to contribute to a
                  sustainable future.
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Make recycling accessible to everyone</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Provide fair compensation for scrap materials</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Promote environmental sustainability</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center text-pretty leading-relaxed">
                  To become the leading platform for sustainable waste management globally, creating a world where every
                  piece of scrap material is valued, recycled, and contributes to a circular economy that benefits both
                  people and the planet.
                </p>
                <div className="space-y-3 pt-4">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Global expansion and impact</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Recycle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">100% circular economy participation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">Continuous innovation in recycling</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Ready to Join Our Mission?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Be part of the sustainable future. Start recycling with ScrapBiz today and make a positive impact on the
                environment while earning money.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline">
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About