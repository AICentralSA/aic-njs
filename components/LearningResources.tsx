import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const resources = [
  {
    image: 'https://i.ibb.co/cXV8v2S/ai-fundamentals.jpg',
    title: 'AI Fundamentals Workshop',
    description: 'Get started with the basics of AI and machine learning.',
    link: '#',
    buttonText: 'Enroll Now',
  },
  {
    image: 'https://i.ibb.co/CwTZXKL/advanced-ai.jpg',
    title: 'Advanced AI Techniques',
    description: 'Dive deep into advanced AI algorithms and methodologies.',
    link: '#',
    buttonText: 'Explore Course',
  },
  {
    image: 'https://i.ibb.co/FXb0qP5/ai-ethics.jpg',
    title: 'AI Ethics and Responsibility',
    description: 'Learn about ethical considerations in AI development.',
    link: '#',
    buttonText: 'Start Learning',
  },
]

const LearningResources = () => {
  return (
    <section id="learning" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={resource.image}
                alt={resource.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{resource.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={resource.link}>{resource.buttonText}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LearningResources