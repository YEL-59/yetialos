import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react'

const Contact = () => {
    const contactMethods = [
        {
            icon: Mail,
            title: 'Email',
            description: 'Send us an email anytime',
            contact: 'hello@yetialos.com',
            action: 'mailto:hello@yetialos.com',
        },
        {
            icon: Phone,
            title: 'Phone',
            description: 'Call us during business hours',
            contact: '+1 (555) 123-4567',
            action: 'tel:+15551234567',
        },
        {
            icon: MessageSquare,
            title: 'Live Chat',
            description: 'Chat with our support team',
            contact: 'Available 24/7',
            action: '#',
        },
        {
            icon: MapPin,
            title: 'Office',
            description: 'Visit our headquarters',
            contact: '123 Tech Street, San Francisco, CA',
            action: '#',
        },
    ]

    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Have questions about YetiAlos? We'd love to hear from you.
                    Get in touch with our team and we'll respond as soon as possible.
                </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactMethods.map((method, index) => {
                    const Icon = method.icon
                    return (
                        <Card key={index} className="text-center hover:shadow-md transition-shadow">
                            <CardHeader>
                                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <Icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-lg">{method.title}</CardTitle>
                                <CardDescription>{method.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="font-medium mb-4">{method.contact}</p>
                                <Button variant="outline" size="sm" asChild>
                                    <a href={method.action}>
                                        Contact
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>

            {/* Contact Form */}
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <CardTitle>Send us a message</CardTitle>
                    <CardDescription>
                        Fill out the form below and we'll get back to you within 24 hours.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                                placeholder="john.doe@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                                placeholder="How can we help?"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                                placeholder="Tell us more about your inquiry..."
                            ></textarea>
                        </div>

                        <Button type="submit" className="w-full">
                            Send Message
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>
                        Quick answers to common questions about YetiAlos
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-medium mb-2">What is YetiAlos?</h4>
                            <p className="text-sm text-muted-foreground">
                                YetiAlos is a modern React application template built with shadcn/ui, Tailwind CSS,
                                and React Router, designed to help developers quickly start building beautiful web applications.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">Is it free to use?</h4>
                            <p className="text-sm text-muted-foreground">
                                Yes, YetiAlos is completely free and open-source. You can use it for personal
                                and commercial projects without any restrictions.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2">How do I get started?</h4>
                            <p className="text-sm text-muted-foreground">
                                Simply clone the repository, install dependencies with npm or yarn,
                                and start building your application. Check our documentation for detailed instructions.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Contact
