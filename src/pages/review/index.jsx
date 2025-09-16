import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Star, ThumbsUp, MessageCircle, User } from 'lucide-react'

const Review = () => {
    const reviews = [
        {
            id: 1,
            restaurantName: "Bella Vista Italian",
            userName: "Sarah Johnson",
            userAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c4?w=40&h=40&fit=crop&crop=face",
            rating: 5,
            date: "2024-01-15",
            title: "Absolutely Amazing Experience!",
            content: "The food was exceptional and the service was top-notch. The pasta was cooked to perfection and the tiramisu was the best I've ever had. Will definitely be coming back!",
            helpful: 12,
            replies: 3,
            verified: true
        },
        {
            id: 2,
            restaurantName: "Sakura Sushi House",
            userName: "Mike Chen",
            userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
            rating: 4,
            date: "2024-01-12",
            title: "Great Sushi, Pricey but Worth It",
            content: "The sushi was incredibly fresh and beautifully presented. The atmosphere is very authentic. Only downside is the price, but you get what you pay for in terms of quality.",
            helpful: 8,
            replies: 1,
            verified: true
        },
        {
            id: 3,
            restaurantName: "The Local Bistro",
            userName: "Emma Wilson",
            userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
            rating: 4,
            date: "2024-01-10",
            title: "Perfect for Brunch",
            content: "Loved the farm-to-table concept. The eggs benedict was delicious and the coffee was excellent. Great spot for weekend brunch with friends.",
            helpful: 15,
            replies: 2,
            verified: false
        }
    ]

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`h-4 w-4 ${i < rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
            />
        ))
    }

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Reviews</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Read honest reviews from fellow food lovers and share your own dining experiences.
                </p>
            </div>

            {/* Write Review CTA */}
            <Card className="bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Share Your Experience</CardTitle>
                    <CardDescription className="text-lg">
                        Help others discover great restaurants by writing a review
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                        Write a Review
                    </Button>
                </CardContent>
            </Card>

            {/* Filter/Sort Options */}
            <div className="flex flex-wrap gap-4 justify-between items-center">
                <div className="flex flex-wrap gap-2">
                    <Badge variant="default" className="cursor-pointer">All Reviews</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-accent">5 Stars</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-accent">4 Stars</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-accent">3 Stars</Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-accent">Verified</Badge>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Sort by:</span>
                    <Badge variant="outline" className="cursor-pointer">Most Recent</Badge>
                </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
                {reviews.map((review) => (
                    <Card key={review.id} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={review.userAvatar}
                                        alt={review.userName}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-semibold">{review.userName}</h3>
                                            {review.verified && (
                                                <Badge variant="secondary" className="text-xs">
                                                    Verified
                                                </Badge>
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            Reviewed {review.restaurantName}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center gap-1 mb-1">
                                        {renderStars(review.rating)}
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        {new Date(review.date).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">{review.title}</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    {review.content}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t">
                                <div className="flex items-center gap-4">
                                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                                        <ThumbsUp className="h-4 w-4" />
                                        <span>Helpful ({review.helpful})</span>
                                    </Button>
                                    <Button variant="ghost" size="sm" className="flex items-center gap-2">
                                        <MessageCircle className="h-4 w-4" />
                                        <span>Reply ({review.replies})</span>
                                    </Button>
                                </div>
                                <Button variant="ghost" size="sm">
                                    Share
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Load More */}
            <div className="text-center">
                <Button variant="outline" size="lg">
                    Load More Reviews
                </Button>
            </div>

            {/* Stats Section */}
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>Review Statistics</CardTitle>
                    <CardDescription>
                        Help us build the best food community
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-teal-600">1,234</div>
                            <div className="text-sm text-muted-foreground">Total Reviews</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-teal-600">567</div>
                            <div className="text-sm text-muted-foreground">Restaurants</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-teal-600">4.2</div>
                            <div className="text-sm text-muted-foreground">Avg Rating</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-teal-600">89%</div>
                            <div className="text-sm text-muted-foreground">Verified Reviews</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Review
