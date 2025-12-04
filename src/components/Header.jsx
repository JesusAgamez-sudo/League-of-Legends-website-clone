import LeagueIconLogo from "./LeagueIconLogo";
import RiotFistLogo from "./RiotFistLogo";

export default function Header() {
    return (
        <header className="w-full h-[72px] bg-[#111] flex items-center justify-between px-8 border-b border-[#785a28]/20">
            {/* Logos Section */}
            <div className="flex items-center gap-6">
                {/* Riot Fist Logo - Desktop only */}
                <div className="hidden md:block">
                    <RiotFistLogo className="w-[85px] h-auto text-[#c8aa6e]" />
                </div>

                {/* League Icon Logo - Always visible */}
                <LeagueIconLogo className="w-[30px] h-auto text-[#c8aa6e]" />
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
                <a
                    href="#game"
                    className="text-[#c8aa6e] text-xs font-bold uppercase tracking-[0.15em] hover:text-[#f0e6d2] transition-colors duration-300"
                >
                    JUEGO
                </a>
                <a
                    href="#champions"
                    className="text-[#c8aa6e] text-xs font-bold uppercase tracking-[0.15em] hover:text-[#f0e6d2] transition-colors duration-300"
                >
                    CAMPEONES
                </a>
                <a
                    href="#news"
                    className="text-[#c8aa6e] text-xs font-bold uppercase tracking-[0.15em] hover:text-[#f0e6d2] transition-colors duration-300"
                >
                    NOTICIAS
                </a>
                <a
                    href="#patch-notes"
                    className="text-[#c8aa6e] text-xs font-bold uppercase tracking-[0.15em] hover:text-[#f0e6d2] transition-colors duration-300"
                >
                    NOTAS DE PARCHE
                </a>
                <a
                    href="#discover"
                    className="text-[#c8aa6e] text-xs font-bold uppercase tracking-[0.15em] hover:text-[#f0e6d2] transition-colors duration-300"
                >
                    DESCUBRE
                </a>
                <a
                    href="#esports"
                    className="text-[#c8aa6e] text-xs font-bold uppercase tracking-[0.15em] hover:text-[#f0e6d2] transition-colors duration-300"
                >
                    ESPORTS
                </a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
                <button className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider border-2 border-[#c8aa6e] text-[#c8aa6e] rounded hover:bg-[#c8aa6e]/10 hover:border-[#f0e6d2] hover:text-[#f0e6d2] transition-all duration-300">
                    INICIAR SESIÓN
                </button>
                <button className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider bg-gradient-to-b from-[#c8aa6e] to-[#b88a35] text-[#010a13] border-2 border-[#f0e6d2] rounded hover:from-[#f0e6d2] hover:to-[#c8aa6e] transition-all duration-300 shadow-lg">
                    JUGAR GRATIS
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-[#c8aa6e] p-2">
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </header>
    );
}
