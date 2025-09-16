import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Code, Palette, Rocket } from 'lucide-react'

const About = () => {
    const technologies = [
        'React 18',
        'Vite',
        'React Router',
        'Tailwind CSS',
        'shadcn/ui',
        'Lucide Icons',
        'Radix UI',
    ]

    const highlights = [
        {
            icon: Code,
            title: 'Modern Development',
            description: 'Built with the latest React patterns and best practices for maintainable code.',
        },
        {
            icon: Palette,
            title: 'Beautiful UI',
            description: 'Leverages shadcn/ui components for consistent and accessible design.',
        },
        {
            icon: Rocket,
            title: 'Fast & Efficient',
            description: 'Optimized build process with Vite for lightning-fast development and deployment.',
        },
    ]

    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">About YetiAlos</h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    A comprehensive React application template that combines modern development tools
                    with beautiful design components to create exceptional user experiences.
                </p>
            </div>

            {/* Project Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        Project Overview
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                        YetiAlos is a modern React application template that demonstrates the integration of
                        popular frontend technologies. It showcases how to build scalable, maintainable,
                        and visually appealing web applications using industry-standard tools and practices.
                    </p>
                    <p className="text-muted-foreground">
                        The project emphasizes developer experience with fast build times, hot module replacement,
                        and a comprehensive component library that ensures consistency across the application.
                    </p>
                </CardContent>
            </Card>

            {/* Technologies Used */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-center">Technologies Used</h2>
                <div className="flex flex-wrap justify-center gap-2">
                    {technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Key Highlights */}
            <div className="space-y-8">
                <h2 className="text-2xl font-bold text-center">Key Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {highlights.map((highlight, index) => {
                        const Icon = highlight.icon
                        return (
                            <Card key={index}>
                                <CardHeader>
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                                        <Icon className="h-5 w-5 text-primary" />
                                    </div>
                                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>{highlight.description}</CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>

            {/* Features */}
            <Card>
                <CardHeader>
                    <CardTitle>What's Included</CardTitle>
                    <CardDescription>
                        Everything you need to start building modern React applications
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Responsive design with Tailwind CSS</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Pre-built UI components from shadcn/ui</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Client-side routing with React Router</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Dark mode support</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Mobile-first responsive navigation</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Accessible components with Radix UI</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

export default About
