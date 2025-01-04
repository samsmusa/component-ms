import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  const testimonials = [
    {
      content: "Best high-end web tools that work well with Startup Framework. Enjoyed every bit of it!",
      author: "Danny Support",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      content: "As a business targeting high-net worth individuals, we were looking for a elite service that matches our brand.",
      author: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      content: "The most important part of the Startup Framework is the samples.",
      author: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      content: "I've built my website with Startup Framework and it was amazing!",
      author: "Emily Davis",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Clients say about us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="backdrop-blur-sm bg-white/30">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <span className="font-medium">{testimonial.author}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

