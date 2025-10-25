import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

export default function CommunityTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5c4?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "This platform helped me discover the most amazing hidden gems in my city. The reviews are honest and detailed, making it easy to choose the perfect restaurant for any occasion.",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "As a food blogger, I appreciate how easy it is to share my dining experiences here. The community is engaged and the interface is user-friendly. Highly recommend!",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Miami",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "I've found my new favorite restaurants through this site. The review quality is excellent and I love being able to contribute to helping others find great food.",
    },
    {
      id: 4,
      name: "David Wilson",
      location: "Chicago",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "Absolutely phenomenal platform! Every recommendation has been spot-on, and the community is incredibly helpful. This has transformed how I discover new restaurants.",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      location: "Seattle",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "This service exceeded all my expectations. The curated recommendations and authentic reviews have helped me find amazing dining experiences I never would have discovered.",
    },
    {
      id: 6,
      name: "James Anderson",
      location: "Boston",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      review:
        "From the moment I started using this platform, I've been impressed. The interface is intuitive, the reviews are trustworthy, and I've discovered so many great places.",
    },
  ];

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 768) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const maxSlide = Math.max(0, testimonials.length - itemsPerView);

  const nextSlide = () =>
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied food lovers who trust our platform to
            discover their next great meal.
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all ${
              currentSlide === 0
                ? "opacity-40 cursor-not-allowed"
                : "hover:shadow-xl hover:bg-gray-50"
            }`}
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === maxSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all ${
              currentSlide === maxSlide
                ? "opacity-40 cursor-not-allowed"
                : "hover:shadow-xl hover:bg-gray-50"
            }`}
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-12 sm:mx-16">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / itemsPerView)
                }%)`,
                width: `${(testimonials.length * 100) / itemsPerView}%`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full">
                    <div className="space-y-4">
                      {/* Quote Icon */}
                      <div className="flex justify-start">
                        <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center">
                          <Quote className="h-5 w-5 text-teal-600" />
                        </div>
                      </div>

                      {/* Star Rating */}
                      <div className="flex items-center space-x-1">
                        {renderStars(testimonial.rating)}
                      </div>

                      {/* Review Text */}
                      <div>
                        <p className="text-gray-700 leading-relaxed text-sm line-clamp-4">
                          "{testimonial.review}"
                        </p>
                      </div>

                      {/* User Profile */}
                      <div className="flex items-center space-x-3 pt-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-teal-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
