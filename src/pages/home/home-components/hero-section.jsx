import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'
import { useState } from 'react'

const HeroSection = () => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        // Handle search functionality
        console.log('Searching for:', searchQuery)
        // You can add your search logic here or redirect to restaurant page with search params
    }

    return (
        <section className="relative min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/src/assects/herobg.png"
                    alt="Restaurant dining scene"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        // Fallback background if image doesn't load
                        e.target.style.display = 'none'
                        e.target.parentElement.style.background = 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 100%), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop") center/cover'
                    }}
                />
                {/* Dark overlay for text readability - matching the image */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content Container - Centered with rounded background */}
            <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6">
                <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-12 border border-white/10">
                    {/* Main Heading - Exact text from image */}
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-7xl mx-auto">
                            Find the Best Restaurants
                            <br />
                            <span className="text-teal-400">Near You</span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">
                            Discover amazing dining experiences through authentic reviews from real food lovers in your community
                        </p>
                    </div>

                    {/* Search Bar - Matching the exact design from image */}
                    <div className="mt-8">
                        <form onSubmit={handleSearch} className="relative">
                            <div className="flex items-center bg-white rounded-xl shadow-2xl overflow-hidden max-w-full sm:max-w-2xl mx-auto border border-gray-100">
                                <div className="flex-1 flex items-center py-3 px-4 sm:py-4 sm:px-6">
                                    <Search className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search for a restaurant , dish ...."
                                        className="w-full text-gray-600 placeholder-gray-400 focus:outline-none text-base bg-transparent"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-3 sm:px-8 sm:py-4 rounded-lg h-auto font-medium text-sm sm:text-base m-1"
                                >
                                    Find Restaurants
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
