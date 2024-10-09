import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Brain, ShoppingCart, Laptop, Cog, Microscope, Headphones } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI Consulting',
    description: 'Expert guidance to integrate AI into your business operations.',
  },
  {
    icon: Cog,
    title: 'AI Implementation',
    description: 'End-to-end AI solution development and deployment.',
  },
  {
    icon: Laptop,
    title: 'AI Training',
    description: 'Comprehensive AI education programs for your team.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Management',
    description: 'AI-powered solutions for Amazon and Takealot sellers.',
  },
  {
    icon: Microscope,
    title: 'AI Research',
    description: 'Cutting-edge AI research and development services.',
  },
  {
    icon: Headphones,
    title: 'AI-Enhanced IT Support',
    description: '24/7 IT assistance powered by advanced AI.',
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition duration-300">
              <CardHeader>
                <service.icon className="w-12 h-12 text-purple-600 mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services