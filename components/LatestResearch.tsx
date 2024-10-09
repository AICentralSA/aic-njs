import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const LatestResearch = () => {
  return (
    <section id="research" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Latest Research</h2>
        <Card>
          <CardHeader>
            <CardTitle>Exploring Consciousness in AI Systems</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Our latest research delves into the complex topic of consciousness in artificial intelligence, exploring its implications for future AI development.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/research">Read More</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

export default LatestResearch