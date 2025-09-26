import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Factory, Building2, Home, Truck, Award, Users, Calendar, MapPin, CheckCircle, ArrowRight } from "lucide-react"

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Green Tech Campus Recycling",
      category: "Corporate",
      location: "Mumbai, Maharashtra",
      date: "2024",
      description: "Complete scrap management solution for a 50,000 sq ft tech campus with 2000+ employees.",
      image: "/modern-office-building-with-recycling-facilities.jpg",
      stats: {
        scrapCollected: "150 Tons",
        revenue: "₹45 Lakhs",
        duration: "12 Months",
      },
      highlights: [
        "Zero waste to landfill achieved",
        "Monthly pickup schedule implemented",
        "Employee awareness program conducted",
        "Digital tracking system deployed",
      ],
    },
    {
      id: 2,
      title: "Residential Complex Initiative",
      category: "Residential",
      location: "Delhi NCR",
      date: "2024",
      description: "Door-to-door scrap collection service for 500+ apartments across multiple residential complexes.",
      image: "/modern-residential-apartment-complex-with-green-sp.jpg",
      stats: {
        scrapCollected: "80 Tons",
        revenue: "₹24 Lakhs",
        duration: "8 Months",
      },
      highlights: [
        "500+ families participated",
        "Weekly collection schedule",
        "Community awareness drives",
        "Mobile app integration",
      ],
    },
    {
      id: 3,
      title: "Manufacturing Plant Cleanup",
      category: "Industrial",
      location: "Pune, Maharashtra",
      date: "2023",
      description: "Large-scale industrial scrap removal and recycling for automotive manufacturing facility.",
      image: "/industrial-manufacturing-plant-with-recycling-equi.jpg",
      stats: {
        scrapCollected: "300 Tons",
        revenue: "₹90 Lakhs",
        duration: "6 Months",
      },
      highlights: [
        "Heavy machinery scrap processed",
        "Specialized handling equipment used",
        "Environmental compliance maintained",
        "24/7 operation support",
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="portfolio" className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Award className="h-4 w-4 mr-2" />
              Our Portfolio
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
              Transforming <span className="text-primary">Communities</span> Through Recycling
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Discover how Green Roing has helped businesses, communities, and institutions across India achieve their
              sustainability goals while generating significant value from their scrap materials.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">₹2000+</div>
              <div className="text-sm text-muted-foreground">Tons Collected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">800+</div>
              <div className="text-sm text-muted-foreground">Tons Recycled</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Cities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      {/* <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="secondary" className="w-fit mx-auto">
              Featured Projects
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Success Stories Across Industries
            </h2>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="border-border hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg line-clamp-1">{project.title}</CardTitle>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {project.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                   <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-muted/50 rounded-lg p-2">
                      <div className="text-sm font-semibold text-primary">{project.stats.scrapCollected}</div>
                      <div className="text-xs text-muted-foreground">Collected</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2">
                      <div className="text-sm font-semibold text-primary">{project.stats.revenue}</div>
                      <div className="text-xs text-muted-foreground">Revenue</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2">
                      <div className="text-sm font-semibold text-primary">{project.stats.duration}</div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                  </div>

                    <div className="space-y-2">
                    <div className="text-sm font-medium">Key Highlights:</div>
                    <div className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Portfolio