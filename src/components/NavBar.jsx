import { useState } from 'react';
import RiotLogo from './RiotLogo';
import RiotFistLogo from './RiotFistLogo';
import LeagueIconLogo from './LeagueIconLogo';
import LeagueLogo from './LeagueLogo';
import GlobeIcon from './GlobeIcon';

export default function NavBar() {
  // Estado para hover del logo Riot
  const [isRiotHovered, setIsRiotHovered] = useState(false);
  
  // Estado para el buscador
  const [searchOpen, setSearchOpen] = useState(false);
  
  // Estado para el menú móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Estado para el menú de idiomas
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  
  // Estado para submenús en móvil
  const [newsSubmenuOpen, setNewsSubmenuOpen] = useState(false);
  const [moreSubmenuOpen, setMoreSubmenuOpen] = useState(false);

  // Función para toggle del buscador
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#111111] border-b border-[#1e1e1e] z-50">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* ========== LOGOS (IZQUIERDA) ========== */}
          <div className="flex items-center gap-6">
            {/* Riot Logo - Cambia a rojo en hover */}
            <div 
              className="cursor-pointer transition-all duration-300"
              onMouseEnter={() => setIsRiotHovered(true)}
              onMouseLeave={() => setIsRiotHovered(false)}
            >
              {isRiotHovered ? (
                <RiotFistLogo className="w-[85px] h-auto text-[#d13639]" />
              ) : (
                <RiotLogo className="w-[85px] h-auto text-white" />
              )}
            </div>

            {/* League Icon Logo - Solo desktop */}
            <div className="hidden md:block">
              <LeagueIconLogo className="w-[30px] h-auto text-[#c8aa6e]" />
            </div>

            {/* League Logo completo - Solo móvil */}
            <div className="md:hidden">
              <LeagueLogo className="w-[75px] h-auto text-[#c8aa6e]" />
            </div>
          </div>

          {/* ========== MENÚ DESKTOP (CENTRO) ========== */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {/* Información del juego */}
            <a 
              href="#info" 
              className="nav-item group relative text-white text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-300"
            >
              Información del juego
            </a>

            {/* Campeones */}
            <a 
              href="#champions" 
              className="nav-item group relative text-white text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-300"
            >
              Campeones
            </a>

            {/* Noticias - Con submenu */}
            {!searchOpen && (
              <div className="relative group">
                <button className="nav-item relative text-white text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-300 flex items-center gap-1">
                  Noticias
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Submenu Noticias */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <a href="#all" className="block px-4 py-3 text-white text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Todos</a>
                  <a href="#updates" className="block px-4 py-3 text-white text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Actualizaciones del juego</a>
                  <a href="#esports" className="block px-4 py-3 text-white text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Esports</a>
                  <a href="#dev" className="block px-4 py-3 text-white text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Desarrolladores</a>
                  <a href="#story" className="block px-4 py-3 text-white text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Historia</a>
                  <a href="#media" className="block px-4 py-3 text-white text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Medios</a>
                  <a href="#community" className="block px-4 py-3 text-white text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Comunidad Riot Games</a>
                </div>
              </div>
            )}

            {/* Notas de versión */}
            {!searchOpen && (
              <a 
                href="#patch" 
                className="nav-item group relative text-white text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-300"
              >
                Notas de versión
              </a>
            )}

            {/* Más - Con submenu */}
            <div className="relative group">
              <button className="nav-item relative text-white text-xs font-bold uppercase tracking-[0.1em] hover:text-[#c8aa6e] transition-colors duration-300 flex items-center gap-1">
                Más
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Submenu Más */}
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#1a1a1a] border border-[#2a2a2a] rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="#discover" className="block px-4 py-3 text-white text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Descubre</a>
                <a href="#esports-more" className="block px-4 py-3 text-white text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Esports</a>
                <a href="#universe" className="block px-4 py-3 text-white text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Universo</a>
                <a href="#support" className="block px-4 py-3 text-white text-sm hover:bg-[#252525] hover:text-[#c8aa6e] transition-colors">Soporte</a>
              </div>
            </div>
          </div>

          {/* ========== ACCIONES DERECHA ========== */}
          <div className="flex items-center gap-4">
            {/* Buscador - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Input de búsqueda (aparece con animación) */}
              <div className={`overflow-hidden transition-all duration-300 ${searchOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'}`}>
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full bg-[#1a1a1a] text-white px-4 py-2 rounded border border-[#2a2a2a] focus:border-[#c8aa6e] focus:outline-none text-sm"
                  autoFocus={searchOpen}
                />
              </div>
              
              {/* Botón de búsqueda */}
              <button 
                onClick={toggleSearch}
                className="p-2 text-white hover:text-[#c8aa6e] transition-colors duration-300"
              >
                {searchOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Selector de idioma - Desktop */}
            <div className="hidden lg:block relative">
              <button 
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className={`p-2 transition-colors duration-300 ${languageMenuOpen ? 'bg-[#1e1e1e] text-white rounded-t' : 'text-[#f0e6d2] hover:text-white hover:bg-[#1e1e1e]/50 rounded'}`}
              >
                <GlobeIcon className="w-[14px] h-[14px]" />
              </button>

              {/* Dropdown de idiomas */}
              {languageMenuOpen && (
                <div className="absolute top-full right-0 w-48 bg-white text-[#111] shadow-xl rounded-b-sm py-2 z-50 max-h-[300px] overflow-y-auto">
                  {/* Triángulo superior (indicador) */}
                  <div className="absolute -top-2 right-3 w-4 h-4 bg-white rotate-45 transform"></div>
                  
                  <div className="relative z-10 bg-white">
                    <a href="#" className="block px-6 py-2 text-xs font-bold text-[#111] hover:bg-[#f0f0f0] transition-colors">ENGLISH (NA)</a>
                    <a href="#" className="block px-6 py-2 text-xs font-bold text-[#939393] hover:bg-[#f0f0f0] hover:text-[#111] transition-colors">ENGLISH (EUW)</a>
                    <a href="#" className="block px-6 py-2 text-xs font-bold text-[#939393] hover:bg-[#f0f0f0] hover:text-[#111] transition-colors">DEUTSCH</a>
                    <a href="#" className="block px-6 py-2 text-xs font-bold text-[#939393] hover:bg-[#f0f0f0] hover:text-[#111] transition-colors">ESPAÑOL (EUW)</a>
                    <a href="#" className="block px-6 py-2 text-xs font-bold text-[#939393] hover:bg-[#f0f0f0] hover:text-[#111] transition-colors">FRANÇAIS</a>
                    <a href="#" className="block px-6 py-2 text-xs font-bold text-[#939393] hover:bg-[#f0f0f0] hover:text-[#111] transition-colors">ITALIANO</a>
                    <a href="#" className="block px-6 py-2 text-xs font-bold text-[#939393] hover:bg-[#f0f0f0] hover:text-[#111] transition-colors">POLSKI</a>
                    <a href="#" className="block px-6 py-2 text-xs font-bold text-[#939393] hover:bg-[#f0f0f0] hover:text-[#111] transition-colors">ΕΛΛΗΝΙΚΆ</a>
                    <a href="#" className="block px-6 py-2 text-xs font-bold text-[#939393] hover:bg-[#f0f0f0] hover:text-[#111] transition-colors">ROMÂNĂ</a>
                    <a href="#" className="block px-6 py-2 text-xs font-bold text-[#939393] hover:bg-[#f0f0f0] hover:text-[#111] transition-colors">MAGYAR</a>
                    <a href="#" className="block px-6 py-2 text-xs font-bold text-[#939393] hover:bg-[#f0f0f0] hover:text-[#111] transition-colors">CZECH</a>
                    <a href="#" className="block px-6 py-2 text-xs font-bold text-[#939393] hover:bg-[#f0f0f0] hover:text-[#111] transition-colors">ESPAÑOL (LATAM)</a>
                  </div>
                </div>
              )}
            </div>

            {/* Botón "JUGAR AHORA" - Desktop (estilo oficial con fondo cyan) */}
            <button className="hidden lg:block px-6 py-2.5 bg-[#0bc6e3] text-[#111111] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#0dd8f7] transition-all duration-300 shadow-lg">
              Jugar ahora
            </button>

            {/* Menú hamburguesa - Móvil */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ========== MENÚ MÓVIL (DRAWER) ========== */}
      <div className={`lg:hidden fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)}>
        <div className={`fixed right-0 top-0 h-full w-80 bg-[#111111] transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
          {/* Header del drawer */}
          <div className="flex items-center justify-between p-6 border-b border-[#2a2a2a]">
            <span className="text-white font-bold uppercase tracking-wider">Menú</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Items del menú móvil */}
          <div className="overflow-y-auto h-[calc(100%-80px)] p-6">
            <a href="#info" className="block py-3 text-white text-sm font-bold uppercase tracking-wider hover:text-[#c8aa6e] transition-colors">Información del juego</a>
            <a href="#champions" className="block py-3 text-white text-sm font-bold uppercase tracking-wider hover:text-[#c8aa6e] transition-colors">Campeones</a>

            {/* Noticias - Acordeón */}
            <div className="border-t border-[#2a2a2a] mt-3 pt-3">
              <button 
                onClick={() => setNewsSubmenuOpen(!newsSubmenuOpen)}
                className="w-full flex items-center justify-between py-3 text-white text-sm font-bold uppercase tracking-wider hover:text-[#c8aa6e] transition-colors"
              >
                Noticias
                <svg className={`w-4 h-4 transition-transform ${newsSubmenuOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {newsSubmenuOpen && (
                <div className="pl-4 space-y-2">
                  <a href="#all" className="block py-2 text-white text-sm hover:text-[#c8aa6e]">Todos</a>
                  <a href="#updates" className="block py-2 text-white text-sm hover:text-[#c8aa6e]">Actualizaciones del juego</a>
                  <a href="#esports" className="block py-2 text-white text-sm hover:text-[#c8aa6e]">Esports</a>
                  <a href="#dev" className="block py-2 text-white text-sm hover:text-[#c8aa6e]">Desarrolladores</a>
                  <a href="#story" className="block py-2 text-white text-sm hover:text-[#c8aa6e]">Historia</a>
                  <a href="#media" className="block py-2 text-white text-sm hover:text-[#c8aa6e]">Medios</a>
                  <a href="#community" className="block py-2 text-white text-sm hover:text-[#c8aa6e]">Comunidad Riot Games</a>
                </div>
              )}
            </div>

            <a href="#patch" className="block py-3 text-white text-sm font-bold uppercase tracking-wider hover:text-[#c8aa6e] transition-colors">Notas de versión</a>

            {/* Más - Acordeón */}
            <div className="border-t border-[#2a2a2a] mt-3 pt-3">
              <button 
                onClick={() => setMoreSubmenuOpen(!moreSubmenuOpen)}
                className="w-full flex items-center justify-between py-3 text-white text-sm font-bold uppercase tracking-wider hover:text-[#c8aa6e] transition-colors"
              >
                Más
                <svg className={`w-4 h-4 transition-transform ${moreSubmenuOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {moreSubmenuOpen && (
                <div className="pl-4 space-y-2">
                  <a href="#discover" className="block py-2 text-white text-sm hover:text-[#c8aa6e]">Descubre</a>
                  <a href="#esports-more" className="block py-2 text-white text-sm hover:text-[#c8aa6e]">Esports</a>
                  <a href="#universe" className="block py-2 text-white text-sm hover:text-[#c8aa6e]">Universo</a>
                  <a href="#support" className="block py-2 text-white text-sm hover:text-[#c8aa6e]">Soporte</a>
                </div>
              )}
            </div>

            {/* Botón "Jugar ahora" en móvil */}
            <button className="w-full mt-6 px-6 py-3 bg-[#0bc6e3] text-[#111111] text-sm font-bold uppercase tracking-wider rounded hover:bg-[#0dd8f7] transition-colors shadow-lg">
              Jugar ahora
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
