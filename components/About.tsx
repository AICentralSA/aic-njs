import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">About AI Central</h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2018, AI Central is at the forefront of AI innovation in Africa. We're dedicated to empowering businesses with cutting-edge AI solutions, fostering growth and technological advancement across the continent.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://i.ibb.co/XSBzRNz/ai-central-team.jpg"
              alt="AI Central Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About