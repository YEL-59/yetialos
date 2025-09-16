import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useState } from 'react'

const CommunityTestimonials = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c4?w=80&h=80&fit=crop&crop=face",
            rating: 5,
            review: "The culinary haven did not disappoint. The amazing cuisine paired with a cozy atmosphere made this a perfect dining spot to try. The attention to detail in every dish was remarkable, and the service was impeccable."
        },
        {
            id: 2,
            name: "Michael Chen",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
            rating: 5,
            review: "Outstanding experience! The flavors were incredible and the presentation was top-notch. It's clear my dining expectations were met. The sommelier's wine recommendations perfectly complemented each course."
        },
        {
            id: 3,
            name: "Emma Rodriguez",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
            rating: 5,
            review: "What an amazing find! The food was exceptional and the service was outstanding. This place has now become my favorite restaurant in the city. The chef's attention to seasonal ingredients really shows in every bite."
        },
        {
            id: 4,
            name: "David Wilson",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
            rating: 5,
            review: "Absolutely phenomenal dining experience! Every course was a masterpiece, and the staff went above and beyond to make our evening special. The ambiance was perfect for our anniversary celebration."
        },
        {
            id: 5,
            name: "Lisa Thompson",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
            rating: 5,
            review: "This restaurant exceeded all expectations. The innovative menu, exceptional service, and beautiful atmosphere created an unforgettable evening. I can't wait to return and try their seasonal specials."
        },
        {
            id: 6,
            name: "James Anderson",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
            rating: 5,
            review: "From the moment we walked in, we were treated like VIPs. The food was extraordinary, with each dish telling its own story. This is definitely a place I'll be recommending to all my friends."
        }
    ]

    const itemsPerView = 3
    const maxSlide = Math.max(0, testimonials.length - itemsPerView)

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
                className={`h-4 w-4 ${i < rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-gray-300'
                    }`}
            />
        ))
    }

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        What Our Community Says
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join thousands of satisfied food lovers who trust our platform to discover their next great meal.
                    </p>
                </div>

                {/* Testimonials Slider */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-full w-12 h-12"
                        onClick={prevSlide}
                        disabled={currentSlide === 0}
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-full w-12 h-12"
                        onClick={nextSlide}
                        disabled={currentSlide === maxSlide}
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>

                    {/* Cards Container */}
                    <div className="overflow-hidden mx-12">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-1/3 flex-shrink-0 px-4">
                                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white h-full">
                                        <CardContent className="p-6">
                                            <div className="space-y-4">
                                                {/* Star Rating */}
                                                <div className="flex items-center justify-center space-x-1">
                                                    {renderStars(testimonial.rating)}
                                                </div>

                                                {/* Review Text */}
                                                <div className="text-center">
                                                    <p className="text-gray-700 leading-relaxed text-base">
                                                        "{testimonial.review}"
                                                    </p>
                                                </div>

                                                {/* User Profile */}
                                                <div className="flex items-center justify-center space-x-3 pt-4 border-t border-gray-100">
                                                    <img
                                                        src={testimonial.avatar}
                                                        alt={testimonial.name}
                                                        className="w-12 h-12 rounded-full object-cover"
                                                    />
                                                    <div className="text-center">
                                                        <h4 className="font-semibold text-gray-900">
                                                            {testimonial.name}
                                                        </h4>
                                                        <p className="text-sm text-gray-500">
                                                            Verified Customer
                                                        </p>
                                                    </div>
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

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <Button
                        size="lg"
                        className="bg-teal-600 hover:bg-teal-700 text-white px-8"
                    >
                        Share Your Experience
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default CommunityTestimonials
