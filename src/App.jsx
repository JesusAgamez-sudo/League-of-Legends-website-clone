import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FeaturedNews from './components/FeaturedNews'
import ChampionSelector from './components/ChampionSelector'

function App() {
    return (
        <div className="relative min-h-screen bg-[#010a13]">
            <NavBar />
            <HeroSection />
            <FeaturedNews />
            <ChampionSelector />
        </div>
    )
}

export default App
