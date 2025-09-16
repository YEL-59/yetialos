import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Mail, Linkedin, Twitter } from 'lucide-react'

const Team = () => {
    const teamMembers = [
        {
            name: "Sarah Johnson",
            role: "CEO & Founder",
            bio: "Passionate food lover with 10+ years in the restaurant industry.",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c4?w=300&h=300&fit=crop&crop=face",
            social: {
                email: "sarah@yetialos.com",
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            name: "Mike Chen",
            role: "Head of Product",
            bio: "Tech enthusiast building the future of food discovery.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
            social: {
                email: "mike@yetialos.com",
                linkedin: "#",
                twitter: "#"
            }
        },
        {
            name: "Emma Wilson",
            role: "Head of Marketing",
            bio: "Connecting food lovers with amazing dining experiences.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
            social: {
                email: "emma@yetialos.com",
                linkedin: "#",
                twitter: "#"
            }
        }
    ]

    return (
        <div className="space-y-12">
            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Our Team</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Meet the passionate food lovers behind YetiAlos who are dedicated to helping you discover amazing dining experiences.
                </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="mx-auto w-32 h-32 mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <CardTitle className="text-xl">{member.name}</CardTitle>
                            <CardDescription>
                                <Badge variant="secondary">{member.role}</Badge>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                {member.bio}
                            </p>
                            <div className="flex justify-center space-x-3">
                                <a
                                    href={`mailto:${member.social.email}`}
                                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-100 transition-colors"
                                >
                                    <Mail className="h-4 w-4 text-gray-600 hover:text-teal-600" />
                                </a>
                                <a
                                    href={member.social.linkedin}
                                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-100 transition-colors"
                                >
                                    <Linkedin className="h-4 w-4 text-gray-600 hover:text-teal-600" />
                                </a>
                                <a
                                    href={member.social.twitter}
                                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-teal-100 transition-colors"
                                >
                                    <Twitter className="h-4 w-4 text-gray-600 hover:text-teal-600" />
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Team
