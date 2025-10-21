import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Star,
  Phone,
  ArrowLeft,
  Heart,
  Share2,
  Bookmark,
  Utensils,
  User,
  Sparkles,
  DollarSign,
} from "lucide-react";
import { Link, useParams, useLocation } from "react-router-dom";
import { CommunityTestimonials } from "../home/home-components";

const fallback = {
  id: "el-nacional",
  name: "El Nacional Barcelona Cuisine",
  cuisine: "Mediterranean",
  rating: 4.0,
  reviews: 1201,
  address: "Passeig de Gràcia, Barcelona",
  location: "Barcelona, Spain",
  phone: "+34 930 000 000",
  hours: {
    Monday: "11:00 AM – 10:00 PM",
    Tuesday: "11:00 AM – 10:00 PM",
    Wednesday: "11:00 AM – 10:00 PM",
    Thursday: "11:00 AM – 10:00 PM",
    Friday: "11:00 AM – 11:00 PM",
    Saturday: "11:00 AM – 11:00 PM",
    Sunday: "11:00 AM – 9:00 PM",
  },
  priceRange: "$$$",
  description:
    "El Nacional is a unique multi-space restaurant celebrating the rich culinary traditions of Spain and the Mediterranean. Enjoy vibrant ambience, diverse menus, and exceptional service.",
  images: [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=700&fit=crop",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
  ],
};

const RatingBar = ({ label, value }) => (
  <div className="flex items-center gap-3">
    <span className="w-24 text-sm text-muted-foreground">{label}</span>
    <div className="flex-1 h-2 rounded-full bg-gray-200">
      <div
        className="h-2 rounded-full bg-teal-600"
        style={{ width: `${value * 20}%` }}
      />
    </div>
    <span className="text-sm text-muted-foreground">{value.toFixed(1)}</span>
  </div>
);

const SummaryItem = ({ icon: Icon, title, value }) => (
  <div className="flex items-center gap-3 rounded-lg border border-teal-600/40 px-4 py-3">
    <div className="h-9 w-9 flex items-center justify-center rounded-md border border-teal-600/40">
      <Icon className="h-4 w-4 text-teal-700" />
    </div>
    <div>
      <div className="text-xs text-muted-foreground">{title}</div>
      <div className="text-sm font-medium">{value}</div>
    </div>
  </div>
);

const RestaurantDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const base = location.state?.restaurant;
  const restaurant = base
    ? {
        ...fallback,
        ...base,
        images: base.images ?? [
          base.image ?? fallback.images[0],
          ...fallback.images.slice(1),
        ],
        hours: typeof base.hours === "object" ? base.hours : fallback.hours,
      }
    : fallback;

  return (
    <div className="space-y-8">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">
            {restaurant.name}
          </h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <a
              href={`tel:${restaurant.phone}`}
              className="inline-flex items-center gap-2"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" /> Share
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Bookmark className="h-4 w-4" /> Save
          </Button>
        </div>
      </div>

      {/* Image gallery */}
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-3 p-3">
          <img
            src={restaurant.images[0]}
            alt="Main"
            className="w-full h-64 md:h-[360px] object-cover rounded-md"
          />
          <div className="grid grid-rows-3 gap-3">
            {restaurant.images.slice(1).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`gallery-${i}`}
                className="w-full h-24 md:h-[112px] object-cover rounded-md"
              />
            ))}
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <div className="flex gap-2 text-sm">
        <Button variant="secondary" size="sm">
          Overview
        </Button>
        <Button variant="outline" size="sm">
          Menu
        </Button>
        <Button variant="outline" size="sm">
          Reviews
        </Button>
      </div>

      {/* Brief look + Save */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">With a brief look</h2>
            <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground">
              <Badge variant="outline" className="px-3 py-1">
                {restaurant.cuisine}
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                {restaurant.priceRange}
              </Badge>
              <span className="inline-flex items-center gap-1">
                <Star className="h-4 w-4 text-amber-500" />
                {restaurant.rating} ({restaurant.reviews})
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {restaurant.location}
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <Card>
            <CardHeader className="py-4">
              <CardTitle className="text-base">Save this restaurant</CardTitle>
              <CardDescription>Keep it handy for later.</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Button variant="outline" className="gap-2 w-full">
                <Heart className="h-4 w-4" /> Save
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* About + Hours */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">About</CardTitle>
              <CardDescription>Learn more about this place</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {restaurant.description}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm mb-3">
                <MapPin className="h-4 w-4" /> {restaurant.address}
              </div>
              <div className="rounded-md overflow-hidden border">
                <iframe
                  title="map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    restaurant.address
                  )}&output=embed`}
                  className="w-full h-52"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Hours</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Updated recently
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {Object.entries(restaurant.hours).map(([day, hr]) => (
                <div key={day} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{day}</span>
                  <span>{hr}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reviews */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Reviews</CardTitle>
          <CardDescription>
            Trusted by {restaurant.reviews.toLocaleString()} diners
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-semibold">
                  {restaurant.rating.toFixed(1)}
                </span>
                <span className="text-muted-foreground">Excellent</span>
              </div>
              <div className="space-y-2">
                <RatingBar label="Food" value={4.0} />
                <RatingBar label="Service" value={3.9} />
                <RatingBar label="Ambience" value={4.1} />
                <RatingBar label="Value" value={3.8} />
              </div>
            </div>
            <div className="space-y-2">
              <RatingBar label="Food" value={4.0} />
              <RatingBar label="Service" value={3.9} />
              <RatingBar label="Ambience" value={4.1} />
              <RatingBar label="Value" value={3.8} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Review summary actions */}
      {/* <Card>
        <CardHeader>
          <CardTitle className="text-base">Reviews summary</CardTitle>
          <CardDescription>Highlights from recent feedback</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Share your experience and help others discover great food. Keep this
            page for later or share it with friends.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="gap-2">
              <Star className="h-4 w-4" /> Write review
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" /> Share
            </Button>
            <Button variant="outline" className="gap-2">
              <Bookmark className="h-4 w-4" /> Save
            </Button>
          </div>
        </CardContent>
      </Card> */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Reviews summary</CardTitle>
          <CardDescription>
            This summary was created by AI, based on recent reviews.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="text-sm text-muted-foreground leading-relaxed">
              Izakaya High Japanese Cuisine is popular for its warm and stylish
              atmosphere, making it ideal for special occasions or casual
              gatherings. Many travelers praise the food for its fresh
              ingredients and innovative Japanese flavors, though some note
              rushed service. Service earns rave reviews for its attentiveness
              and professionalism. However, reviewers warn of extended wait
              times and suggest eating beforehand. Despite premium pricing, the
              exceptional dining experience is well-regarded, though some find
              the portions small.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SummaryItem icon={Utensils} title="Food" value="Artistic" />
              <SummaryItem icon={User} title="Service" value="Attentive" />
              <SummaryItem
                icon={Sparkles}
                title="Atmosphere"
                value="Inviting"
              />
              <SummaryItem icon={DollarSign} title="Value" value="High-end" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Back */}
      <Link
        to="/restaurant"
        className="inline-flex items-center text-teal-600 hover:underline"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Restaurants
      </Link>

      <CommunityTestimonials />
    </div>
  );
};

export default RestaurantDetails;
