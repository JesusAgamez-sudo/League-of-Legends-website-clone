import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FeaturedNews from './components/FeaturedNews'
import ChampionSelector from './components/ChampionSelector'
import StyleSection from './components/StyleSection'
import GameModesSection from './components/GameModesSection'
import Footer from './components/Footer'

function App() {
    return (
        <div className="relative min-h-screen bg-[#010a13]">
            <NavBar />
            <HeroSection />
            <FeaturedNews />
            <ChampionSelector />
            <StyleSection />
            <GameModesSection />
            <Footer />
        </div>
    )
}

export default App
