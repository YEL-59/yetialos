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
import { useState } from "react";
import { Pencil } from "lucide-react";

const fallback = {
  id: "el-nacional",
  name: "El Nacional Barcelona Cuisine",
  cuisine: "Mediterranean",
  rating: 4.0,
  reviews: 1201,
  address: "Passeig de Gràcia, Barcelona",
  location: "Les Corts, 08028 Barcelona, Spain",
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
  gallery: [
    {
      label: "Interior",
      count: 25,
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    },
    {
      label: "Food",
      count: 36,
      src: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=400&fit=crop",
    },
    {
      label: "Menu",
      count: 24,
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
    },
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
        gallery: base.gallery ?? [
          {
            label: "Interior",
            count: 25,
            src: base.image ?? fallback.images[1],
          },
          { label: "Food", count: 36, src: fallback.images[2] },
          { label: "Menu", count: 24, src: fallback.images[3] },
        ],
      }
    : fallback;

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "hours", label: "Hours" },
    { id: "location", label: "Location" },
    { id: "reviews", label: "Reviews" },
  ];
  const [activeTab, setActiveTab] = useState("overview");
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(id);
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">{restaurant.name}</h1>
        </div>
        <div className="flex gap-2 text-[#16A286]">
          <Button variant="outline" size="sm" asChild>
            <a
              href={`tel:${restaurant.phone}`}
              className="inline-flex items-center gap-2"
            >
              <Pencil className="h-4 w-4" /> Review
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

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-3">
        <img
          src={restaurant.images[0]}
          alt="Main restaurant view"
          className="w-full h-64 md:h-[360px] object-cover rounded-lg"
        />
        <div className="grid grid-rows-3 gap-3">
          {restaurant.gallery.map((item, i) => (
            <div key={i} className="relative overflow-hidden rounded-lg">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-24 md:h-[112px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/50 flex items-center justify-between px-3 py-2 text-white bg-gradient-to-t from-black/50 to-transparent">
                <span className="text-xs">{item.label}</span>
                <span className="text-xs rounded-md bg-white/90 text-gray-900 px-2 py-0.5">
                  {item.count}+
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 text-sm">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => scrollTo(t.id)}
            className={`px-2 py-1 rounded-full ${
              activeTab === t.id
                ? "text-[#16A286] bg-[#16A286]/10"
                : "text-muted-foreground hover:text-[#16A286]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* With a brief look */}
          <div id="overview">
            <h2 className="text-xl font-semibold mb-4">With a brief look</h2>
            <div className="flex flex-wrap gap-3 items-center">
              <Badge variant="outline" className="px-3 py-1">
                {restaurant.cuisine}
              </Badge>
              <Badge variant="outline" className="px-3 py-1">
                {restaurant.priceRange}
              </Badge>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="font-medium">{restaurant.rating}</span>
                <span className="text-muted-foreground">
                  ({restaurant.reviews})
                </span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 text-muted-foreground py-3">
                <MapPin className="h-4 w-4" />
                <span>{restaurant.location}</span>
              </div>

              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.97037 9.37497H12.0312C11.9729 7.84914 11.7004 6.50164 11.3062 5.51831C11.0829 4.95831 10.8312 4.54747 10.5854 4.28664C10.377 4.06664 10.2037 3.98331 10.0687 3.96331H9.93286C9.7987 3.98331 9.62453 4.06664 9.4162 4.28664C9.16953 4.54747 8.9187 4.95831 8.69453 5.51831C8.3012 6.50164 8.02953 7.84914 7.97037 9.37497ZM7.85953 4.35247C7.73774 4.57961 7.62923 4.81361 7.53453 5.05331C7.07287 6.20747 6.7787 7.71831 6.71953 9.37497H3.9887C4.10512 8.26134 4.52873 7.20196 5.21224 6.31509C5.89576 5.42821 6.81229 4.74873 7.85953 4.35247ZM9.8537 2.71497C5.89703 2.78997 2.70703 6.02164 2.70703 9.99997C2.70648 10.9575 2.89463 11.9057 3.26072 12.7904C3.62681 13.6752 4.16367 14.4791 4.84061 15.1563C5.51755 15.8335 6.32129 16.3706 7.20592 16.737C8.09054 17.1034 9.0387 17.2919 9.9962 17.2916C14.0237 17.2916 17.2904 14.0266 17.2904 9.99997C17.2912 8.09232 16.5435 6.2605 15.208 4.89826C13.8726 3.53601 12.056 2.75208 10.1487 2.71497C10.0506 2.70626 9.95184 2.70626 9.8537 2.71497ZM12.142 4.35247C12.2604 4.57247 12.3687 4.80609 12.467 5.05331C12.9287 6.20747 13.2229 7.71831 13.282 9.37497H16.0087C15.8926 8.26181 15.4696 7.20277 14.7869 6.31594C14.1042 5.42911 13.1885 4.74935 12.142 4.35247ZM16.0087 10.625H13.282C13.2229 12.2816 12.9287 13.7916 12.4679 14.9458C12.3679 15.1947 12.2587 15.4294 12.1404 15.65C13.187 15.2523 14.1027 14.5721 14.7857 13.6849C15.4686 12.7978 15.892 11.7385 16.0087 10.625ZM7.8637 15.655C7.7402 15.4252 7.63029 15.1884 7.53453 14.9458C7.07287 13.7925 6.7787 12.2816 6.71953 10.625H3.9887C4.10415 11.7404 4.52777 12.8017 5.21214 13.6901C5.89651 14.5784 6.81462 15.2588 7.8637 15.655ZM12.0312 10.625C11.9729 12.15 11.7004 13.4983 11.3062 14.4816C11.0829 15.0408 10.8312 15.4516 10.5854 15.7125C10.3395 15.9725 10.142 16.0408 10.0012 16.0408C9.85953 16.0408 9.66203 15.9725 9.4162 15.7125C9.16953 15.4516 8.9187 15.0408 8.69453 14.4816C8.3012 13.4983 8.02953 12.1508 7.97037 10.625H12.0312Z"
                      fill="#002B11"
                    />
                  </svg>
                  <span>Website</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_50954_9827)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.9332 6.82751V16.6417H12.6832V13.205H11.0273V9.11668C11.0273 8.25835 11.4048 7.66001 11.9065 7.29668C12.314 7.00775 12.7987 6.84753 13.2982 6.83668L13.9332 6.82751ZM12.6832 11.955V8.28001L12.6398 8.31001C12.4515 8.44668 12.2773 8.67252 12.2773 9.11835V11.955H12.6832Z"
                        fill="#002B11"
                      />
                      <path
                        d="M7.57253 16.6417H8.82253V10.2083C9.02697 10.1561 9.21364 10.0742 9.38253 9.96249C9.70086 9.75083 9.91003 9.46249 10.0459 9.16499C10.3042 8.59666 10.3267 7.92499 10.3267 7.46249V6.83749H9.07669V7.46249C9.07669 7.92583 9.04336 8.34999 8.90836 8.64583C8.88492 8.69809 8.85616 8.7478 8.82253 8.79416V6.83749H7.57253V8.73749C7.55142 8.70604 7.53249 8.67319 7.51586 8.63916C7.36919 8.35249 7.31836 7.93083 7.31836 7.46249V6.83749H6.06836V7.46249C6.06836 7.96583 6.11336 8.64083 6.40169 9.20666C6.55169 9.50083 6.77336 9.77833 7.09586 9.97916C7.24253 10.0697 7.40142 10.14 7.57253 10.19V16.6417Z"
                        fill="#002B11"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.6804 0.26416L3.44628 3.74333H3.34961V19.7358H16.6496V3.74333H15.6813L15.6804 0.26416ZM14.4304 3.74333V1.91833L8.01628 3.74416L14.4304 3.74333ZM15.3988 4.99333H4.59961V18.4858H15.3996L15.3988 4.99333Z"
                        fill="#002B11"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_50954_9827">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Menu</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.33749 1.77499L9.64832 6.08916L8.12666 8.35999L8.20666 8.53249C8.34499 8.82249 8.56249 9.22249 8.87332 9.65499C9.46249 10.4767 10.37 11.39 11.6925 11.905L14.3317 10.7758L18.225 14.6717L15.5975 18.1717L15.3308 18.2025H15.3275L15.3225 18.2033L15.3075 18.205L15.2575 18.2092C15.2164 18.213 15.1594 18.2164 15.0867 18.2192C14.9408 18.2258 14.7333 18.2275 14.4725 18.2158C13.7527 18.1793 13.0385 18.0681 12.3417 17.8842C10.5833 17.4283 8.26666 16.3883 5.95166 14.0717C3.63332 11.7525 2.58749 9.42666 2.12582 7.66333C1.93901 6.96356 1.82452 6.24647 1.78416 5.52333C1.77145 5.26067 1.77256 4.99753 1.78749 4.73499L1.79166 4.68499L1.79332 4.67083V4.66333C1.79332 4.66333 1.79416 4.66166 2.41582 4.72999L1.79416 4.66166L1.82416 4.39083L5.33749 1.77499ZM3.02499 5.05583C3.02332 5.16194 3.0261 5.29749 3.03332 5.46249C3.05582 5.90999 3.12916 6.56083 3.33499 7.34749C3.74582 8.91666 4.68832 11.0408 6.83499 13.1892C8.97916 15.3342 11.0942 16.27 12.655 16.675C13.4383 16.8775 14.0842 16.9483 14.53 16.9683C14.6933 16.975 14.828 16.9769 14.9342 16.9742L16.575 14.7892L14.0458 12.2583L11.735 13.2467L11.5075 13.1683C9.74499 12.5633 8.57749 11.3875 7.85749 10.385C7.56036 9.97126 7.29993 9.53237 7.07916 9.07333C6.98986 8.88772 6.90922 8.69807 6.83749 8.50499L6.83416 8.49416L6.83249 8.49083V8.48916C6.83249 8.48916 6.83166 8.48833 7.42416 8.28749L6.83166 8.48749L6.73249 8.19583L8.03832 6.24666L5.21666 3.42333L3.02499 5.05583Z"
                      fill="#002B11"
                    />
                  </svg>
                  <span>+34 871 03 76 33</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.82422 4.61H17.1776V15.39H2.82422V4.61ZM4.07422 6.55417V14.14H15.9276V6.55417L10.0009 11.4033L4.07422 6.55417ZM14.8017 5.86H5.20005L10.0009 9.78833L14.8017 5.86Z"
                      fill="#002B11"
                    />
                  </svg>
                  <span>Email</span>
                </div>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <p className="text-muted-foreground leading-relaxed">
              {restaurant.description}
            </p>
            <div>
              <p className="text-lg font-semibold mb-3 text-[#002B11]">
                Features
              </p>
              <div className="flex items-center gap-1 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.7021 12.4225C16.2362 11.2267 16.3854 10.0083 16.1104 8.86251C15.8204 7.64835 15.0696 6.57585 13.9188 5.73418C11.6363 4.06668 7.76708 3.28835 2.48458 3.96918L1.84375 4.05251L1.94792 4.68918C2.38958 7.41918 4.57292 10.7467 7.16292 12.755C8.46458 13.7642 9.93208 14.4908 11.4004 14.5992C12.6496 14.6908 13.8571 14.3317 14.9004 13.4033C15.8704 14.5058 16.6296 15.5408 17.1004 16.2767L18.1529 15.6042C17.6279 14.7808 16.7796 13.6317 15.7021 12.4225ZM14.7579 11.4108C15.0246 10.6108 15.0621 9.84751 14.8954 9.15251C14.6837 8.26751 14.1287 7.43585 13.1821 6.74418C11.3554 5.40835 8.08875 4.61918 3.32042 5.12918C3.91542 7.37335 5.74292 10.0708 7.92958 11.7675C9.12208 12.6925 10.3587 13.2692 11.4937 13.3525C12.3938 13.4192 13.2654 13.1792 14.0562 12.4825C13.8292 12.2463 13.5977 12.0143 13.3621 11.7867C11.6479 10.1292 9.60208 8.61501 7.48292 7.92501L7.87042 6.73668C10.2479 7.51001 12.4554 9.17085 14.2313 10.8875C14.4107 11.0614 14.5863 11.2358 14.7579 11.4108Z"
                    fill="#002B11"
                  />
                </svg>
                <span>
                  Vegetarian friendly, Vegan options, Gluten free options
                </span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.7288 6.46667L14.7621 3.09167C14.7472 3.03894 14.7219 2.98967 14.6879 2.9467C14.6538 2.90374 14.6116 2.86791 14.5637 2.84128C14.5158 2.81465 14.4631 2.79774 14.4086 2.79151C14.3542 2.78529 14.299 2.78987 14.2463 2.80501L1.8563 6.35251C1.78433 6.37322 1.71927 6.41294 1.66797 6.46751L15.7288 6.46667ZM10.3621 5.21667H14.0705L13.7896 4.23584L10.3621 5.21667Z"
                    fill="#002B11"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.91797 6.99164V15.9608H17.0846V6.99164H2.91797ZM2.08464 5.74164C1.97413 5.74164 1.86815 5.78554 1.79001 5.86368C1.71187 5.94182 1.66797 6.0478 1.66797 6.1583V16.7941C1.66797 16.9046 1.71187 17.0106 1.79001 17.0888C1.86815 17.1669 1.97413 17.2108 2.08464 17.2108H17.918C18.0285 17.2108 18.1345 17.1669 18.2126 17.0888C18.2907 17.0106 18.3346 16.9046 18.3346 16.7941V6.1583C18.3346 6.0478 18.2907 5.94182 18.2126 5.86368C18.1345 5.78554 18.0285 5.74164 17.918 5.74164H2.08464Z"
                    fill="#002B11"
                  />
                  <path
                    d="M15.7272 11.075C15.7272 11.2008 15.7024 11.3254 15.6543 11.4417C15.6061 11.558 15.5355 11.6636 15.4465 11.7526C15.3575 11.8416 15.2519 11.9122 15.1356 11.9604C15.0193 12.0085 14.8947 12.0333 14.7689 12.0333C14.643 12.0333 14.5184 12.0085 14.4021 11.9604C14.2859 11.9122 14.1802 11.8416 14.0912 11.7526C14.0022 11.6636 13.9317 11.558 13.8835 11.4417C13.8353 11.3254 13.8105 11.2008 13.8105 11.075C13.8105 10.8208 13.9115 10.577 14.0912 10.3973C14.271 10.2176 14.5147 10.1166 14.7689 10.1166C15.023 10.1166 15.2668 10.2176 15.4465 10.3973C15.6262 10.577 15.7272 10.8208 15.7272 11.075Z"
                    fill="#002B11"
                  />
                </svg>
                <span>
                  Digital Payments, Accepts credit cards: American Express,
                  Mastercard, Visa
                </span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.6919 6.05417L7.91693 14.8292L3.30859 10.2208L4.19193 9.3375L7.91693 13.0625L15.8086 5.17084L16.6919 6.05417Z"
                    fill="#002B11"
                  />
                </svg>
                <span>Lunch, Dinner, Drinks</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div id="location">
            <h3 className="text-lg font-semibold mb-3">Location</h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>{restaurant.address}</span>
            </div>
            <div className="rounded-lg overflow-hidden border h-64">
              <iframe
                title="Restaurant location map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  restaurant.address
                )}&output=embed`}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Save this restaurant */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Save this restaurant</CardTitle>
              <CardDescription>Keep it handy for later.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full gap-2">
                <Heart className="h-4 w-4" />
                Save
              </Button>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card id="hours">
            <CardHeader>
              <CardTitle className="text-lg">Hours</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Updated recently
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.entries(restaurant.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between items-center">
                  <span className="text-muted-foreground">{day}</span>
                  <span className="text-sm">{hours}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Reviews Section */}
      <Card id="reviews">
        <CardHeader>
          <CardTitle className="text-xl">Reviews</CardTitle>
          <CardDescription>
            Trusted by {restaurant.reviews.toLocaleString()} diners
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - Overall rating */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold">{restaurant.rating}</span>
                <span className="text-lg text-muted-foreground">Excellent</span>
              </div>
              <div className="space-y-3">
                <RatingBar label="Food" value={4.2} />
                <RatingBar label="Service" value={4.1} />
                <RatingBar label="Ambience" value={4.3} />
                <RatingBar label="Value" value={3.9} />
              </div>
            </div>

            {/* Right side - Additional ratings */}
            <div className="space-y-3">
              <RatingBar label="Overall" value={4.5} />
              <RatingBar label="Food" value={4.2} />
              <RatingBar label="Service" value={4.1} />
              <RatingBar label="Ambience" value={4.3} />
              <RatingBar label="Value" value={3.9} />
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
