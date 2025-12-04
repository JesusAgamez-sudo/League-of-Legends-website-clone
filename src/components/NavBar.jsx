import { useState, useEffect } from 'react';
import RiotLogo from './RiotLogo';
import RiotFistLogo from './RiotFistLogo';
import LeagueIconLogo from './LeagueIconLogo';
import GlobeIcon from './GlobeIcon';

export default function NavBar() {
    const [isRiotHovered, setIsRiotHovered] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Detectar scroll para cambiar estilos
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
        { code: 'es-es', name: 'Español (ES)' },
        { code: 'fr-fr', name: 'Français' },
        { code: 'de-de', name: 'Deutsch' },
        { code: 'it-it', name: 'Italiano' },
        { code: 'pl-pl', name: 'Polski' },
        { code: 'ru-ru', name: 'Русский' },
        { code: 'tr-tr', name: 'Türkçe' },
        { code: 'ja-jp', name: '日本語' },
        { code: 'ko-kr', name: '한국어' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-[#111111] shadow-lg' : 'bg-[#111111]/95 backdrop-blur-sm'
        }`}>
            <div className="max-w-[1920px] mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    
                    {/* ========== LOGOS (IZQUIERDA) ========== */}
                    <div className="flex items-center gap-4 md:gap-6">
                        {/* Riot Logo */}
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

                        {/* Separador vertical */}
                        <div className="hidden md:block w-[1px] h-8 bg-[#2a2a2a]"></div>

                        {/* League Icon Logo */}
                        <a href="/" className="hidden md:block">
                            <LeagueIconLogo className="w-[30px] h-auto text-[#c8aa6e]" />
                        </a>
                    </div>

                    {/* ========== MENÚ DESKTOP (CENTRO) ========== */}
                    <div className="hidden lg:flex items-center gap-8">
                        <a 
                            href="/es-mx/game-info/" 
                            className="text-[#f0e6d2] text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-200"
                        >
                            Información del juego
                        </a>
                        <a 
                            href="/es-mx/champions/" 
                            className="text-[#f0e6d2] text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-200"
                        >
                            Campeones
                        </a>
                        <a 
                            href="/es-mx/news/" 
                            className="text-[#f0e6d2] text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-200"
                        >
                            Noticias
                        </a>
                        <a 
                            href="/es-mx/news/game-updates/patch-notes/" 
                            className="text-[#f0e6d2] text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-200"
                        >
                            Notas de versión
                        </a>
                        
                        {/* Menú "MÁS" con dropdown */}
                        <div className="relative group">
                            <button className="text-[#f0e6d2] text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-200 flex items-center gap-1">
                                Más
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            
                            {/* Dropdown */}
                            <div className="absolute top-full left-0 mt-2 w-56 bg-[#1a1a1a] border border-[#2a2a2a] shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <a href="/es-mx/esports/" className="block px-4 py-3 text-[#f0e6d2] text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Esports</a>
                                <a href="https://universe.leagueoflegends.com/" className="block px-4 py-3 text-[#f0e6d2] text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Universo</a>
                                <a href="https://merch.riotgames.com/" className="block px-4 py-3 text-[#f0e6d2] text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Tienda</a>
                                <a href="/es-mx/community/" className="block px-4 py-3 text-[#f0e6d2] text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Comunidad</a>
                            </div>
                        </div>
                    </div>

                    {/* ========== ACCIONES (DERECHA) ========== */}
                    <div className="flex items-center gap-4">
                        {/* Selector de idioma - Desktop */}
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
                                    <div className="absolute top-full right-0 mt-2 w-48 bg-[#1a1a1a] border border-[#2a2a2a] shadow-2xl z-50 max-h-96 overflow-y-auto">
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

                        {/* Botón "JUGAR AHORA" - Desktop */}
                        <a
                            href="https://signup.leagueoflegends.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:block px-6 py-2 bg-[#0bc6e3] text-[#0a1428] text-xs font-bold uppercase tracking-[0.1em] hover:bg-[#1dd6f3] transition-all duration-200"
                        >
                            Jugar ahora
                        </a>

                        {/* Hamburger Menu - Mobile */}
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

            {/* ========== MENÚ MÓVIL ========== */}
            <div className={`lg:hidden bg-[#111111] border-t border-[#2a2a2a] transition-all duration-300 overflow-hidden ${
                mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="px-4 py-6 space-y-4">
                    <a href="/es-mx/game-info/" className="block text-[#f0e6d2] text-sm font-bold uppercase tracking-wider hover:text-[#c8aa6e] transition-colors">
                        Información del juego
                    </a>
                    <a href="/es-mx/champions/" className="block text-[#f0e6d2] text-sm font-bold uppercase tracking-wider hover:text-[#c8aa6e] transition-colors">
                        Campeones
                    </a>
                    <a href="/es-mx/news/" className="block text-[#f0e6d2] text-sm font-bold uppercase tracking-wider hover:text-[#c8aa6e] transition-colors">
                        Noticias
                    </a>
                    <a href="/es-mx/news/game-updates/patch-notes/" className="block text-[#f0e6d2] text-sm font-bold uppercase tracking-wider hover:text-[#c8aa6e] transition-colors">
                        Notas de versión
                    </a>
                    <a href="/es-mx/esports/" className="block text-[#f0e6d2] text-sm font-bold uppercase tracking-wider hover:text-[#c8aa6e] transition-colors">
                        Esports
                    </a>
                    
                    <div className="pt-4 border-t border-[#2a2a2a]">
                        <a
                            href="https://signup.leagueoflegends.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full px-6 py-3 bg-[#0bc6e3] text-[#0a1428] text-sm font-bold uppercase tracking-wider text-center hover:bg-[#1dd6f3] transition-all"
                        >
                            Jugar ahora
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
