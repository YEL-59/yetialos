import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Calendar,
  Users,
  Camera,
  Check,
  ChevronDown,
  X,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { useMemo, useState } from "react";

const Review = () => {
  const location = useLocation();
  const restaurant = location.state?.restaurant;

  // Form state
  const [rating, setRating] = useState(0);
  const [visitMonth, setVisitMonth] = useState(
    new Date().toLocaleString("default", { month: "long" }) +
      " " +
      new Date().getFullYear()
  );
  const companionOptions = [
    "Business",
    "Couples",
    "Family",
    "Friends",
    "Solo",
  ];
  const [companions, setCompanions] = useState(["Family"]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [agree, setAgree] = useState(false);
  const [tipsOpen, setTipsOpen] = useState(false);
  const minContentChars = 100;
  const maxTitleChars = 120;

  const monthChoices = useMemo(() => {
    const now = new Date();
    const arr = [];
    for (let i = 0; i < 18; i++) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      arr.push(
        `${d.toLocaleString("default", { month: "long" })} ${d.getFullYear()}`
      );
    }
    return arr;
  }, []);

  const toggleCompanion = (c) => {
    setCompanions((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  const canContinue = rating > 0 && content.length >= minContentChars && agree;

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-10">
      {/* Left column: heading + place card   */}
      <div className="space-y-8 md:sticky md:top-0 md:h-fit self-start">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Tell us, how
            <br /> was your
            <br /> visit?
          </h1>
        </div>

        <Card>
          <CardContent className="p-4 flex items-start gap-4">
            <img
              src={
                restaurant?.image ||
                "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
              }
              alt={restaurant?.name || "Place"}
              className="w-28 h-28 rounded-md object-cover"
            />
            <div className="space-y-1">
              <div className="font-semibold">
                {restaurant?.name || "Your recent place"}
              </div>
              <div className="text-sm text-muted-foreground">
                {restaurant?.address || "Select the place if this isn’t right."}
              </div>
              <Button variant="link" className="px-0 text-teal-700">
                Change activity
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Right column: form */}
      <div className="space-y-10">
        {/* Rate experience */}
        <section>
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">How would you rate your experience?</h2>
          </div>
          <div className="mt-4 flex gap-3">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((val) => (
              <button
                key={val}
                onClick={() => setRating(val)}
                className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all ${
                  rating >= val
                    ? "border-green-600 bg-green-600"
                    : "border-green-600"
                }`}
                aria-label={`Rate ${val}`}
              >
                {rating >= val ? (
                  <Check className="h-4 w-4 text-white" />
                ) : (
                  <span className="sr-only">{val}</span>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* When did you go */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">When did you go?</h2>
          <div className="relative w-64">
            <select
              value={visitMonth}
              onChange={(e) => setVisitMonth(e.target.value)}
              className="w-full appearance-none rounded-md border px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            >
              {monthChoices.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
        </section>

        {/* Who did you go with */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Who did you go with?</h2>
          <div className="flex flex-wrap gap-2">
            {companionOptions.map((c) => (
              <button
                key={c}
                onClick={() => toggleCompanion(c)}
                className={`px-3 py-1 rounded-full border text-sm ${
                  companions.includes(c)
                    ? "bg-teal-50 border-teal-600 text-teal-700"
                    : "hover:bg-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Write your review */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Write your review</h2>
            <Button variant="link" className="text-teal-700 px-0" onClick={() => setTipsOpen(true)}>
              Review tips
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            {[
              "Experience",
              "Admission fee",
              "Length of visit",
              "Atmosphere",
              "Crowd size",
              "Staff",
              "Best for",
            ].map((t) => (
              <Badge key={t} variant="outline" className="rounded-full">
                {t}
              </Badge>
            ))}
          </div>
          <div className="relative">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={7}
              placeholder="Share your experience..."
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <div className="absolute right-2 bottom-2 text-xs text-muted-foreground">
              {content.length}/{minContentChars} min characters
            </div>
          </div>
        </section>

        {/* Title your review */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Title your review</h2>
          <div className="relative">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value.slice(0, maxTitleChars))}
              placeholder="Give us the gist of your experience"
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
            <div className="absolute right-2 -bottom-5 text-xs text-muted-foreground">
              {title.length}/{maxTitleChars} max characters
            </div>
          </div>
        </section>

        {/* Add some photos */}
        <section className="space-y-3">
          <h2 className="text-lg font-semibold">Add some photos</h2>
          <p className="text-sm text-muted-foreground">Optional</p>
          <label className="block border rounded-md h-48 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-accent">
            <Camera className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm">Click to add photos</span>
            <span className="text-xs text-muted-foreground">or drag and drop</span>
            <input type="file" multiple className="hidden" />
          </label>
        </section>

        {/* Certification */}
        <section className="space-y-3">
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1"
            />
            <span>
              I certify that this review is based on my own experience and is my genuine
              opinion of this establishment and that I have no personal or business
              relationship with this establishment, and have not been offered any
              incentive or payment originating from the establishment to write this
              review. I understand that we have a zero-tolerance policy on fake reviews.
              <Button variant="link" className="px-1">Learn more about the consequences of review fraud.</Button>
            </span>
          </label>
        </section>

        {/* Continue button */}
        <div>
          <Button
            className="w-full md:w-auto bg-green-900 hover:bg-green-800 text-white rounded-full px-8"
            disabled={!canContinue}
          >
            Continue
          </Button>
        </div>
      </div>

      {/* Review tips modal */}
      {tipsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setTipsOpen(false)} />
          <div className="relative bg-white rounded-lg shadow-lg w-[90vw] max-w-md p-6">
            <button
              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
              onClick={() => setTipsOpen(false)}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-2xl font-bold mb-4">What makes a great review?</h3>

            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle className="h-5 w-5 text-green-600" /> Do
                </div>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                  <li>Get specific - the more details, the better</li>
                  <li>Share the good, the bad, and just OK</li>
                  <li>Tell us stuff you’d tell your friends</li>
                  <li>Sprinkle in a few tips and recs</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 font-semibold">
                  <XCircle className="h-5 w-5 text-red-600" /> Don't
                </div>
                <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                  <li>Use profanity, threats, or personal insults</li>
                  <li>Include personal info like email or phone numbers</li>
                  <li>Write in ALL CAPS</li>
                  <li>Share someone else's experience</li>
                </ul>
              </div>

              <Button variant="link" className="px-0 text-teal-700">
                See more review tips <ArrowRight className="ml-1 h-4 w-4" />
              </Button>

              <p className="text-sm text-muted-foreground">
                Manage this property and want to respond to a review?
              </p>
              <Button variant="link" className="px-0">Use the management response form</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
