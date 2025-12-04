import { useState, useEffect } from 'react';
import RiotLogo from './RiotLogo';
import RiotFistLogo from './RiotFistLogo';
import LeagueIconLogo from './LeagueIconLogo';
import GlobeIcon from './GlobeIcon';

export default function NavBar() {
    const [isRiotHovered, setIsRiotHovered] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [moreMenuOpen, setMoreMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const languages = [
        { code: 'es-mx', name: 'Español (MX)' },
        { code: 'en-us', name: 'English (US)' },
        { code: 'pt-br', name: 'Português (BR)' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-[#111111] shadow-lg' : 'bg-[#111111]/95 backdrop-blur-sm'
        }`}>
            <div className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    
                    {/* LOGOS */}
                    <div className="flex items-center gap-4 md:gap-6">
                        <a
                            href="https://www.riotgames.com/"
                            className="cursor-pointer transition-all duration-300"
                            onMouseEnter={() => setIsRiotHovered(true)}
                            onMouseLeave={() => setIsRiotHovered(false)}
                        >
                            {isRiotHovered ? (
                                <RiotFistLogo className="w-[85px] h-auto text-[#d13639]" />
                            ) : (
                                <RiotLogo className="w-[85px] h-auto text-white" />
                            )}
                        </a>

                        <div className="hidden md:block w-[1px] h-8 bg-[#2a2a2a]"></div>

                        <a href="/" className="hidden md:block">
                            <LeagueIconLogo className="w-[30px] h-auto text-[#c8aa6e]" />
                        </a>
                    </div>

                    {/* MENÚ DESKTOP */}
                    <div className="hidden lg:flex items-center gap-8">
                        <a 
                            href="/es-mx/game-info/" 
                            className="text-[#f0e6d2] text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-200"
                        >
                            INFORMACIÓN DEL JUEGO
                        </a>
                        <a 
                            href="/es-mx/champions/" 
                            className="text-[#f0e6d2] text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-200"
                        >
                            CAMPEONES
                        </a>
                        <a 
                            href="/es-mx/news/" 
                            className="text-[#f0e6d2] text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-200"
                        >
                            NOTICIAS
                        </a>
                        <a 
                            href="/es-mx/news/game-updates/patch-notes/" 
                            className="text-[#f0e6d2] text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-200"
                        >
                            NOTAS DE VERSIÓN
                        </a>
                        
                        {/* MÁS dropdown */}
                        <div className="relative">
                            <button 
                                onMouseEnter={() => setMoreMenuOpen(true)}
                                onMouseLeave={() => setMoreMenuOpen(false)}
                                className="text-[#f0e6d2] text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-200 flex items-center gap-1"
                            >
                                MÁS
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            
                            {moreMenuOpen && (
                                <div 
                                    onMouseEnter={() => setMoreMenuOpen(true)}
                                    onMouseLeave={() => setMoreMenuOpen(false)}
                                    className="absolute top-full left-0 mt-2 w-56 bg-[#1a1a1a] border border-[#2a2a2a] shadow-2xl"
                                >
                                    <a href="/es-mx/esports/" className="block px-4 py-3 text-[#f0e6d2] text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Esports</a>
                                    <a href="https://universe.leagueoflegends.com/" className="block px-4 py-3 text-[#f0e6d2] text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Universo</a>
                                    <a href="https://merch.riotgames.com/" className="block px-4 py-3 text-[#f0e6d2] text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Tienda</a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ACCIONES DERECHA */}
                    <div className="flex items-center gap-4">
                        {/* Búsqueda - Desktop */}
                        <button className="hidden md:block text-[#f0e6d2] hover:text-[#c8aa6e] transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Idioma - Desktop */}
                        <div className="hidden md:block relative">
                            <button
                                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                                className="flex items-center gap-2 text-[#f0e6d2] hover:text-[#c8aa6e] transition-colors duration-200"
                            >
                                <GlobeIcon className="w-5 h-5" />
                            </button>
                            
                            {languageMenuOpen && (
                                <>
                                    <div 
                                        className="fixed inset-0 z-40" 
                                        onClick={() => setLanguageMenuOpen(false)}
                                    ></div>
                                    <div className="absolute top-full right-0 mt-2 w-48 bg-[#1a1a1a] border border-[#2a2a2a] shadow-2xl z-50">
                                        {languages.map((lang) => (
                                            <a
                                                key={lang.code}
                                                href={`/${lang.code}/`}
                                                className="block px-4 py-3 text-[#f0e6d2] text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors"
                                            >
                                                {lang.name}
                                            </a>
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* JUGAR AHORA - Desktop */}
                        <a
                            href="https://signup.leagueoflegends.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block px-6 py-2 bg-[#0bc6e3] text-[#0a1428] text-xs font-bold uppercase tracking-[0.1em] hover:bg-[#1dd6f3] transition-all duration-200"
                        >
                            JUGAR AHORA
                        </a>

                        {/* Hamburger - Mobile */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden text-white p-2"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* MENÚ MÓVIL */}
            <div className={`lg:hidden bg-[#111111] border-t border-[#2a2a2a] transition-all duration-300 overflow-hidden ${
                mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="px-4 py-6 space-y-4">
                    <a href="/es-mx/game-info/" className="block text-[#f0e6d2] text-sm font-bold uppercase tracking-wider hover:text-[#c8aa6e] transition-colors">
                        INFORMACIÓN DEL JUEGO
                    </a>
                    <a href="/es-mx/champions/" className="block text-[#f0e6d2] text-sm font-bold uppercase tracking-wider hover:text-[#c8aa6e] transition-colors">
                        CAMPEONES
                    </a>
                    <a href="/es-mx/news/" className="block text-[#f0e6d2] text-sm font-bold uppercase tracking-wider hover:text-[#c8aa6e] transition-colors">
                        NOTICIAS
                    </a>
                    <a href="/es-mx/news/game-updates/patch-notes/" className="block text-[#f0e6d2] text-sm font-bold uppercase tracking-wider hover:text-[#c8aa6e] transition-colors">
                        NOTAS DE VERSIÓN
                    </a>
                    
                    <div className="pt-4 border-t border-[#2a2a2a]">
                        <a
                            href="https://signup.leagueoflegends.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full px-6 py-3 bg-[#0bc6e3] text-[#0a1428] text-sm font-bold uppercase tracking-wider text-center hover:bg-[#1dd6f3] transition-all"
                        >
                            JUGAR AHORA
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
