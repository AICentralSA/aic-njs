import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const FeaturedProduct = () => {
  return (
    <section id="products" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Featured Product</h2>
        <Card className="overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src="https://i.ibb.co/j8GNM6K/TH33-APP.jpg"
                alt="TH33 APP"
                width={400}
                height={300}
                className="h-48 w-full object-cover md:h-full md:w-48"
              />
            </div>
            <div className="p-8">
              <CardHeader>
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Coming Soon</div>
                <CardTitle className="mt-1 text-lg leading-tight font-medium">TH33 APP</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Experience the future of AI with our revolutionary TH33 APP. Designed to transform the way you interact with technology, TH33 APP brings unprecedented AI capabilities to your fingertips.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="#">Learn More</Link>
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default FeaturedProduct