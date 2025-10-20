import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Clock, Star, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const Restaurant = () => {
    const restaurants = [
        {
            id: 1,
            name: "Bella Vista Italian",
            cuisine: "Italian",
            rating: 4.8,
            reviews: 124,
            address: "123 Main St, Downtown",
            phone: "+1 (555) 123-4567",
            hours: "11:00 AM - 10:00 PM",
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
            description: "Authentic Italian cuisine with a modern twist. Family-owned restaurant serving traditional recipes.",
            priceRange: "$$$"
        },
        {
            id: 2,
            name: "Sakura Sushi House",
            cuisine: "Japanese",
            rating: 4.6,
            reviews: 89,
            address: "456 Oak Ave, Midtown",
            phone: "+1 (555) 987-6543",
            hours: "5:00 PM - 11:00 PM",
            image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
            description: "Fresh sushi and traditional Japanese dishes in an elegant atmosphere.",
            priceRange: "$$$$"
        },
        {
            id: 3,
            name: "The Local Bistro",
            cuisine: "American",
            rating: 4.4,
            reviews: 67,
            address: "789 Pine St, Uptown",
            phone: "+1 (555) 456-7890",
            hours: "8:00 AM - 9:00 PM",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
            description: "Farm-to-table American cuisine with locally sourced ingredients.",
            priceRange: "$$"
        }
    ]

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Restaurants</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Discover amazing restaurants in your area. From fine dining to casual eats,
                    find your next favorite spot.
                </p>
            </div>

            {/* Filter Section */}
            <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="default" className="cursor-pointer">All Cuisines</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-accent">Italian</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-accent">Japanese</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-accent">American</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-accent">Mexican</Badge>
                <Badge variant="outline" className="cursor-pointer hover:bg-accent">Chinese</Badge>
            </div>

            {/* Restaurant Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurants.map((restaurant) => (
                    <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={restaurant.image}
                                alt={restaurant.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                                    <CardDescription className="flex items-center gap-1">
                                        <Badge variant="secondary">{restaurant.cuisine}</Badge>
                                        <span className="ml-2">{restaurant.priceRange}</span>
                                    </CardDescription>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="font-medium">{restaurant.rating}</span>
                                    <span className="text-sm text-muted-foreground">({restaurant.reviews})</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground">
                                {restaurant.description}
                            </p>

                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <MapPin className="h-4 w-4" />
                                    <span>{restaurant.address}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Clock className="h-4 w-4" />
                                    <span>{restaurant.hours}</span>
                                </div>
                                <div className="flex items-center gap-2 text-muted-foreground">
                                    <Phone className="h-4 w-4" />
                                    <span>{restaurant.phone}</span>
                                </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                                <Button size="sm" className="flex-1" asChild>
                                    <Link to={`/restaurant/${restaurant.id}`} state={{ restaurant }}>
                                        View Details
                                    </Link>
                                </Button>
                                <Button size="sm" variant="outline" className="flex-1">
                                    Write Review
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Load More */}
            <div className="text-center">
                <Button variant="outline" size="lg">
                    Load More Restaurants
                </Button>
            </div>
        </div>
    )
}

export default Restaurant
