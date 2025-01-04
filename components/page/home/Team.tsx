import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Team() {
  const team = [
    {
      name: "Vanessa Lard",
      role: "UI DESIGNER",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Mason Campbell",
      role: "DEVELOPER",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Paul Evans",
      role: "SENIOR DEVELOPER",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Meet The Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <Card key={index} className="text-center backdrop-blur-sm bg-white/30">
            <CardContent className="pt-6">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src={member.avatar} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

