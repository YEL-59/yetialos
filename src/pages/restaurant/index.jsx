import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MapPin, Star, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const Restaurant = () => {
    const [aiQuery, setAiQuery] = useState('')
    const [country, setCountry] = useState('All Countries')
    const [city, setCity] = useState('All Cities')
    const [cuisine, setCuisine] = useState('All Cuisines')

    const restaurants = [
        {
            id: 1,
            name: 'Sakura Sushi House',
            cuisine: 'Japanese',
            rating: 4.6,
            reviews: 89,
            address: '456 Oak Ave, Midtown',
            image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop',
            priceRange: '$$$$'
        },
        {
            id: 2,
            name: 'The Burger Joint',
            cuisine: 'American',
            rating: 4.5,
            reviews: 152,
            address: '21 Lake Rd, Downtown',
            image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=600&fit=crop',
            priceRange: '$$'
        },
        {
            id: 3,
            name: 'Le Jardin Bistro',
            cuisine: 'French',
            rating: 4.7,
            reviews: 98,
            address: '17 Garden St, Old Town',
            image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop',
            priceRange: '$$$'
        },
        {
            id: 4,
            name: 'Spice Garden',
            cuisine: 'Indian',
            rating: 4.4,
            reviews: 76,
            address: '88 Elm Rd, Midtown',
            image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop',
            priceRange: '$$'
        },
        {
            id: 5,
            name: 'Taco Fiesta',
            cuisine: 'Mexican',
            rating: 4.3,
            reviews: 64,
            address: '12 Sunset Blvd, West End',
            image: 'https://images.unsplash.com/photo-1604908176997-441b9d501c3f?w=800&h=600&fit=crop',
            priceRange: '$$'
        },
        {
            id: 6,
            name: 'Bella Vista Italian',
            cuisine: 'Italian',
            rating: 4.8,
            reviews: 124,
            address: '123 Main St, Downtown',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
            priceRange: '$$$'
        }
    ]

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Restaurants</h1>
                <p className="text-muted-foreground">
                    Discover reviewed restaurants near you
                </p>
            </div>

            {/* Ask AI Suggestion Bar */}
            <Card className="bg-teal-50 border-teal-100">
                <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Ask for Restaurant Suggestions</CardTitle>
                        <Badge variant="outline" className="bg-white">Browse all</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center gap-2 bg-white rounded-full border border-teal-200 focus-within:border-teal-300 focus-within:ring-1 focus-within:ring-teal-300">
                        <input
                            type="text"
                            value={aiQuery}
                            onChange={(e) => setAiQuery(e.target.value)}
                            placeholder="e.g. Best restaurants for a family Sunday with outdoor seating"
                            className="flex-1 bg-transparent px-4 py-3 focus:outline-none placeholder-gray-500"
                        />
                        <Button size="sm" className="bg-teal-600 hover:bg-teal-700 rounded-full mr-1">
                            <Sparkles className="h-4 w-4 mr-2" />
                            Ask AI
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Filter by Location */}
            <Card className="bg-teal-50 border-teal-100">
                <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Filter by Location</CardTitle>
                        <Badge variant="outline" className="bg-white">#CUISINES</Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full rounded-md border border-teal-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-300"
                        >
                            <option>All Countries</option>
                            <option>USA</option>
                            <option>Canada</option>
                            <option>UK</option>
                        </select>
                        <select
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full rounded-md border border-teal-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-300"
                        >
                            <option>All Cities</option>
                            <option>New York</option>
                            <option>Toronto</option>
                            <option>London</option>
                        </select>
                        <select
                            value={cuisine}
                            onChange={(e) => setCuisine(e.target.value)}
                            className="w-full rounded-md border border-teal-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-300"
                        >
                            <option>All Cuisines</option>
                            <option>Italian</option>
                            <option>Japanese</option>
                            <option>American</option>
                            <option>Mexican</option>
                            <option>French</option>
                            <option>Indian</option>
                        </select>
                    </div>
                </CardContent>
            </Card>

            {/* Count */}
            <div className="text-sm text-muted-foreground">Showing {restaurants.length} restaurants</div>

            {/* Restaurant Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurants.map((restaurant) => (
                    <Card key={restaurant.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={restaurant.image}
                                alt={restaurant.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-lg font-semibold">{restaurant.name}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {restaurant.cuisine} • {restaurant.priceRange}
                                    </p>
                                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                                        <MapPin className="h-4 w-4" />
                                        <span>{restaurant.address}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center justify-end gap-1">
                                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                        <span className="font-medium">{restaurant.rating}</span>
                                    </div>
                                    <div className="text-xs text-muted-foreground">{restaurant.reviews} reviews</div>
                                </div>
                            </div>

                            <Button className="mt-4 w-full bg-teal-600 hover:bg-teal-700" asChild>
                                <Link to={`/restaurant/${restaurant.id}`} state={{ restaurant }}>
                                    View Details & Reviews
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Restaurant
