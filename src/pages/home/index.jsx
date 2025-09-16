import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Zap, Shield, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
    const features = [
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'Built with modern technologies for optimal performance and speed.',
        },
        {
            icon: Shield,
            title: 'Secure & Reliable',
            description: 'Enterprise-grade security with 99.9% uptime guarantee.',
        },
        {
            icon: Sparkles,
            title: 'Beautiful Design',
            description: 'Crafted with attention to detail and modern design principles.',
        },
    ]

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <section className="text-center space-y-6">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Welcome to{' '}
                        <span className="text-primary">YetiAlos</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A modern React application built with shadcn/ui, Tailwind CSS, and React Router.
                        Experience the perfect blend of performance and beautiful design.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                        <Link to="/about">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link to="/contact">
                            Learn More
                        </Link>
                    </Button>
                </div>
            </section>

            {/* Features Section */}
            <section className="space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Why Choose YetiAlos?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Built with the latest technologies and best practices to deliver an exceptional experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <Card key={index} className="text-center">
                                <CardHeader>
                                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle>{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-muted rounded-lg p-8 text-center space-y-4">
                <h3 className="text-2xl font-bold">Ready to get started?</h3>
                <p className="text-muted-foreground">
                    Join thousands of developers who trust YetiAlos for their projects.
                </p>
                <Button size="lg" asChild>
                    <Link to="/contact">
                        Contact Us Today
                    </Link>
                </Button>
            </section>
        </div>
    )
}

export default Home
