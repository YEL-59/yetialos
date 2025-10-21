import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, MapPin, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NearbyRestaurants = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [favorites, setFavorites] = useState(new Set([2, 5]));
  const [itemsPerView, setItemsPerView] = useState(3);

  // Responsive behavior: update items per view based on window width
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const toggleFavorite = (restaurantId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(restaurantId)) newFavorites.delete(restaurantId);
      else newFavorites.add(restaurantId);
      return newFavorites;
    });
  };

  const restaurants = [
    {
      id: 1,
      name: "Bella Vista",
      cuisine: "Italian",
      rating: 4.8,
      reviews: 1234,
      location: "Downtown",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=250&fit=crop",
      description:
        "Amazing pasta and incredible atmosphere! The service was outstanding.",
    },
    {
      id: 2,
      name: "Sakura Sushi",
      cuisine: "Japanese",
      rating: 4.9,
      reviews: 856,
      location: "Midtown",
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=250&fit=crop",
      description:
        "Fresh sushi and beautiful presentation. Best Japanese restaurant in the city!",
    },
    {
      id: 3,
      name: "Le Petit Bistro",
      cuisine: "French",
      rating: 4.7,
      reviews: 642,
      location: "Old Town",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop",
      description:
        "Authentic French cuisine with a romantic ambiance. Perfect for date nights.",
    },
    {
      id: 4,
      name: "Taco Loco",
      cuisine: "Mexican",
      rating: 4.6,
      reviews: 923,
      location: "Westside",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
      description:
        "Authentic Mexican flavors with fresh ingredients and vibrant atmosphere.",
    },
    {
      id: 5,
      name: "Dragon Palace",
      cuisine: "Chinese",
      rating: 4.5,
      reviews: 1567,
      location: "Chinatown",
      image:
        "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=250&fit=crop",
      description:
        "Traditional Chinese cuisine with modern presentation and excellent service.",
    },
  ];

  const maxSlide = Math.max(0, restaurants.length - itemsPerView);

  const nextSlide = () =>
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  const getCuisineColor = (cuisine) => {
    const colors = {
      Italian: "bg-orange-100 text-orange-800",
      Japanese: "bg-pink-100 text-pink-800",
      French: "bg-purple-100 text-purple-800",
      Mexican: "bg-yellow-100 text-yellow-800",
      Chinese: "bg-red-100 text-red-800",
    };
    return colors[cuisine] || "bg-gray-100 text-gray-800";
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Restaurants Near You
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most popular dining spots near you, based on reviews
            and community favorites.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-full w-10 h-10 md:w-12 md:h-12"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:shadow-xl transition-shadow rounded-full w-10 h-10 md:w-12 md:h-12"
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </Button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-0 sm:mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / itemsPerView)
                }%)`,
              }}
            >
              {restaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3`}
                >
                  <Link
                    to={`/restaurant/${restaurant.id}`}
                    state={{ restaurant }}
                    className="block"
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={restaurant.image}
                          alt={restaurant.name}
                          className="w-full h-44 sm:h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        />

                        {/* Heart Icon */}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(restaurant.id);
                          }}
                          className={`absolute top-3 right-3 rounded-full w-8 h-8 transition-all duration-200 ${
                            favorites.has(restaurant.id)
                              ? "bg-white text-red-500 hover:scale-110"
                              : "bg-white/80 text-gray-600 hover:text-red-400 hover:scale-110"
                          }`}
                        >
                          <Heart
                            className={`h-4 w-4 transition-all duration-200 ${
                              favorites.has(restaurant.id) ? "fill-current" : ""
                            }`}
                          />
                        </Button>

                        {/* Rating */}
                        <div className="absolute top-3 left-3">
                          <Badge
                            variant="secondary"
                            className="bg-white/90 text-gray-900 font-semibold"
                          >
                            {restaurant.rating}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="p-3 sm:p-4">
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-start justify-between">
                            <h3 className="font-bold text-base sm:text-lg text-gray-900 group-hover:text-teal-600 transition-colors">
                              {restaurant.name}
                            </h3>
                            <Badge
                              variant="outline"
                              className={`text-xs ${getCuisineColor(
                                restaurant.cuisine
                              )}`}
                            >
                              {restaurant.cuisine}
                            </Badge>
                          </div>

                          <div className="flex items-center flex-wrap gap-3 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{restaurant.reviews} reviews</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{restaurant.location}</span>
                            </div>
                          </div>

                          <p className="text-gray-600 text-sm leading-relaxed border-l-4 border-gray-200 pl-2 line-clamp-2">
                            "{restaurant.description}"
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-teal-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyRestaurants;
