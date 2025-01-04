import { MonitorPlay, PenTool, TrendingUp } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Graphic Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    },
    {
      icon: <MonitorPlay className="h-8 w-8 text-primary" />,
      title: "Video Editing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Digital Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Vision & Our Goal</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="backdrop-blur-sm bg-white/30 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-primary hover:text-primary/80">
                  Learn More
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

