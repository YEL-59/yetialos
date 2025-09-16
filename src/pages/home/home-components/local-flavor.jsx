import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const LocalFlavor = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const featuredExperience = {
        title: "Tokyo Kitchen",
        description: "Traditional Japanese cooking class",
        rating: 4.8,
        reviews: 234,
        price: 85,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop",
        location: "Downtown"
    }

    const experiences = [
        {
            id: 1,
            title: "Wilson 2019 Florence Sunset Food Wine Tasting",
            rating: 4.8,
            reviews: 2341,
            price: 89,
            image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop"
        },
        {
            id: 2,
            title: "Tokyo Shibuya Food Tour 1/3 Traditional Japanese Cuisine",
            rating: 4.8,
            reviews: 1432,
            price: 95,
            image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=300&h=200&fit=crop"
        },
        {
            id: 3,
            title: "Line Sharing Food and Walking Tour in Marlin",
            rating: 4.9,
            reviews: 1856,
            price: 65,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop"
        },
        {
            id: 4,
            title: "Spiritual Taste of Dali - Gourmet Food Tour - Small Group",
            rating: 4.6,
            reviews: 987,
            price: 120,
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=200&fit=crop"
        },
        {
            id: 5,
            title: "Authentic Italian Pasta Making Workshop",
            rating: 4.7,
            reviews: 1543,
            price: 75,
            image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=200&fit=crop"
        },
        {
            id: 6,
            title: "Street Food Adventure in Bangkok",
            rating: 4.9,
            reviews: 2187,
            price: 45,
            image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=200&fit=crop"
        },
        {
            id: 7,
            title: "French Pastry Baking Class",
            rating: 4.5,
            reviews: 876,
            price: 110,
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop"
        },
        {
            id: 8,
            title: "Wine Tasting in Tuscany Hills",
            rating: 4.8,
            reviews: 1324,
            price: 95,
            image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=300&h=200&fit=crop"
        }
    ]

    const itemsPerView = 4
    const maxSlide = Math.max(0, experiences.length - itemsPerView)

    const nextSlide = () => {
        setCurrentSlide(prev => Math.min(prev + 1, maxSlide))
    }

    const prevSlide = () => {
        setCurrentSlide(prev => Math.max(prev - 1, 0))
    }

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`h-3 w-3 ${i < Math.floor(rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                    }`}
            />
        ))
    }

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Enjoy the local flavor
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Tasting, tours & regional specialties
                    </p>
                </div>

                {/* Flex Column Layout - Top to Bottom */}
                <div className="flex flex-col space-y-8">
                    {/* Large Featured Card - Top Section */}
                    <div className="w-full">
                        <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                            <div className="relative h-80 lg:h-96 overflow-hidden">
                                <img
                                    src={featuredExperience.image}
                                    alt={featuredExperience.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex items-center space-x-1">
                                                {renderStars(featuredExperience.rating)}
                                            </div>
                                            <span className="text-sm">
                                                {featuredExperience.rating} ({featuredExperience.reviews})
                                            </span>
                                        </div>

                                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                                            {featuredExperience.title}
                                        </h3>

                                        <p className="text-gray-200 text-base lg:text-lg">
                                            {featuredExperience.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-1">
                                                <MapPin className="h-5 w-5" />
                                                <span className="text-base">{featuredExperience.location}</span>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-xl lg:text-2xl font-bold">From ${featuredExperience.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>

                    {/* Slider Section - Bottom Section */}
                    <div className="relative">
                        {/* Navigation Buttons */}
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-full w-10 h-10"
                            onClick={prevSlide}
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>

                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-full w-10 h-10"
                            onClick={nextSlide}
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>

                        {/* Cards Container */}
                        <div className="overflow-hidden ">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)` }}
                            >
                                {experiences.map((experience) => (
                                    <div key={experience.id} className="w-1/4 flex-shrink-0 px-3">
                                        <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md overflow-hidden">
                                            <div className="relative overflow-hidden rounded-t-lg">
                                                <img
                                                    src={experience.image}
                                                    alt={experience.title}
                                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                                />

                                                {/* Rating Badge */}
                                                <div className="absolute top-3 left-3">
                                                    <Badge variant="secondary" className="bg-white/90 text-gray-900 font-semibold">
                                                        {experience.rating}
                                                    </Badge>
                                                </div>
                                            </div>

                                            <CardContent className="p-4">
                                                <div className="space-y-3">
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex items-center space-x-1">
                                                            {renderStars(experience.rating)}
                                                        </div>
                                                        <span className="text-sm text-gray-600">
                                                            {experience.rating} ({experience.reviews})
                                                        </span>
                                                    </div>

                                                    <h4 className="font-semibold text-base leading-tight text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-2">
                                                        {experience.title}
                                                    </h4>

                                                    <div className="flex items-center justify-between">
                                                        <span className="text-base font-bold text-gray-900">
                                                            From ${experience.price}
                                                        </span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Slide Indicators */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? 'bg-teal-600' : 'bg-gray-300'
                                        }`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LocalFlavor
