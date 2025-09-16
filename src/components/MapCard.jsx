import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

function MapCard({ title = "Our Location", coordinates = { lat: 19.076, lng: 72.8777 } }) {
  const { lat, lng } = coordinates
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=14&output=embed`

  return (
    <Card className="border-border hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground text-lg">{title}</h3>
        </div>
        <div className="rounded-lg overflow-hidden h-64 w-full">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={mapSrc}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  )
}

export default MapCard
