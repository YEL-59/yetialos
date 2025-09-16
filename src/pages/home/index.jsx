
import { HeroSection, NearbyRestaurants, TrendingRestaurants, LocalFlavor } from './home-components'

const Home = () => {
    return (
        <div className="space-y-0">
            <HeroSection />
            <TrendingRestaurants />
            <LocalFlavor />
            <NearbyRestaurants />
        </div>
    )
}

export default Home
