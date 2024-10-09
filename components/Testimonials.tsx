import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const testimonials = [
  {
    quote: "AI Central's consulting services have been instrumental in helping us implement AI solutions that have significantly improved our operational efficiency.",
    name: 'John Doe',
    title: 'CEO, Tech Innovations',
    image: 'https://i.ibb.co/56TzGT8/john-doe.jpg',
  },
  {
    quote: "The AI training program from AI Central has equipped our team with the skills needed to drive our AI initiatives forward. Highly recommended!",
    name: 'Jane Smith',
    title: 'CTO, Data Dynamics',
    image: 'https://i.ibb.co/C2zkznB/jane-smith.jpg',
  },
  {
    quote: "AI Central's e-commerce management solutions have revolutionized our online sales strategy. We've seen a 30% increase in revenue since implementation.",
    name: 'Mike Johnson',
    title: 'Founder, E-Shop Pro',
    image: 'https://i.ibb.co/wQZGWRB/mike-johnson.jpg',
  },
]

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <CardTitle className="font-bold">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials