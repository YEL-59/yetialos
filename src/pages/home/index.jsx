
import { HeroSection, NearbyRestaurants, TrendingRestaurants, LocalFlavor, FoodDestinations, CommunityTestimonials } from './home-components'

const Home = () => {
    return (
        <div className="space-y-0">
            <HeroSection />
            <TrendingRestaurants />
            <NearbyRestaurants />
            <LocalFlavor />
            <FoodDestinations />
            <CommunityTestimonials />

        </div>
    )
}

export default Home
