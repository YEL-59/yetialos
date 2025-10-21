import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FoodDestinations = () => {
  const [favorites, setFavorites] = useState(new Set([2])); // Initially liked destination IDs

  const toggleFavorite = (destinationId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(destinationId)) {
        newFavorites.delete(destinationId);
      } else {
        newFavorites.add(destinationId);
      }
      return newFavorites;
    });
  };

  const destinations = [
    {
      id: 1,
      name: "Rome",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      description: "Authentic Italian cuisine and historic charm",
    },
    {
      id: 2,
      name: "Tokyo",
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      description: "World-class sushi and Japanese delicacies",
    },
    {
      id: 3,
      name: "Barcelona",
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      description: "Tapas culture and Mediterranean flavors",
    },
    {
      id: 4,
      name: "Bangkok",
      image:
        "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop",
      description: "Street food paradise and Thai cuisine",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Amazing food destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most popular dining spots based on recent reviews and
            ratings from our community
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                {/* Destination Image */}
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Heart Icon */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleFavorite(destination.id)}
                  className={`absolute top-4 right-4 rounded-full w-8 h-8 transition-all duration-200 ${
                    favorites.has(destination.id)
                      ? "bg-white text-red-500 hover:bg-white hover:scale-110"
                      : "bg-white/80 text-gray-600 hover:bg-white hover:text-red-400 hover:scale-110"
                  }`}
                >
                  <Heart
                    className={`h-4 w-4 transition-all duration-200 ${
                      favorites.has(destination.id) ? "fill-current" : ""
                    }`}
                  />
                </Button>

                {/* City Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {destination.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link to="/restaurant" className="block">
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8"
            >
              Explore All Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoodDestinations;
