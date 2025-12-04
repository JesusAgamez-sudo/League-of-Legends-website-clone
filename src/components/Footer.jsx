import React from 'react';
import RiotLogo from './RiotLogo';

export default function Footer() {
    return (
        <footer className="bg-[#111111] text-[#f0e6d2] pt-16 pb-8 px-4 md:px-8 lg:px-16">
            <div className="max-w-[1300px] mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Column 1 - Riot Games */}
                    <div>
                        <RiotLogo className="w-24 h-auto text-white mb-6" />
                        <div className="flex gap-4 mb-6">
                            {/* Social Media Icons */}
                            <a href="https://www.facebook.com/leagueoflegends" target="_blank" rel="noopener noreferrer" className="text-[#a09b8c] hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/leagueoflegends" target="_blank" rel="noopener noreferrer" className="text-[#a09b8c] hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com/leagueoflegends" target="_blank" rel="noopener noreferrer" className="text-[#a09b8c] hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/leagueoflegends" target="_blank" rel="noopener noreferrer" className="text-[#a09b8c] hover:text-white transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2 - Juego */}
                    <div>
                        <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-wider">Juego</h4>
                        <ul className="space-y-2">
                            <li><a href="https://www.leagueoflegends.com/es-mx/champions/" className="text-[#a09b8c] hover:text-white transition-colors text-sm">Campeones</a></li>
                            <li><a href="https://www.leagueoflegends.com/es-mx/news/game-updates/" className="text-[#a09b8c] hover:text-white transition-colors text-sm">Actualizaciones</a></li>
                            <li><a href="https://www.leagueoflegends.com/es-mx/how-to-play/" className="text-[#a09b8c] hover:text-white transition-colors text-sm">Cómo jugar</a></li>
                            <li><a href="https://support-leagueoflegends.riotgames.com/" className="text-[#a09b8c] hover:text-white transition-colors text-sm">Soporte</a></li>
                        </ul>
                    </div>

                    {/* Column 3 - Comunidad */}
                    <div>
                        <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-wider">Comunidad</h4>
                        <ul className="space-y-2">
                            <li><a href="https://www.leagueoflegends.com/es-mx/news/" className="text-[#a09b8c] hover:text-white transition-colors text-sm">Noticias</a></li>
                            <li><a href="https://www.lolesports.com/" className="text-[#a09b8c] hover:text-white transition-colors text-sm">Esports</a></li>
                            <li><a href="https://universe.leagueoflegends.com/" className="text-[#a09b8c] hover:text-white transition-colors text-sm">Universo</a></li>
                            <li><a href="https://merch.riotgames.com/" className="text-[#a09b8c] hover:text-white transition-colors text-sm">Tienda</a></li>
                        </ul>
                    </div>

                    {/* Column 4 - Riot Games */}
                    <div>
                        <h4 className="text-white font-bold uppercase text-sm mb-4 tracking-wider">Riot Games</h4>
                        <ul className="space-y-2">
                            <li><a href="https://www.riotgames.com/" className="text-[#a09b8c] hover:text-white transition-colors text-sm">Acerca de</a></li>
                            <li><a href="https://www.riotgames.com/en/work-with-us" className="text-[#a09b8c] hover:text-white transition-colors text-sm">Trabaja con nosotros</a></li>
                            <li><a href="https://www.riotgames.com/en/press" className="text-[#a09b8c] hover:text-white transition-colors text-sm">Prensa</a></li>
                            <li><a href="https://developer.riotgames.com/" className="text-[#a09b8c] hover:text-white transition-colors text-sm">Desarrolladores</a></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#2a2a2a] mb-8"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#5b5a56]">
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <a href="https://www.riotgames.com/en/privacy-notice" className="hover:text-[#a09b8c] transition-colors">Aviso de privacidad</a>
                        <a href="https://www.riotgames.com/en/terms-of-service" className="hover:text-[#a09b8c] transition-colors">Términos de servicio</a>
                        <a href="https://www.riotgames.com/en/company-information" className="hover:text-[#a09b8c] transition-colors">Información de la empresa</a>
                        <a href="https://support-leagueoflegends.riotgames.com/hc/en-us/articles/201751974" className="hover:text-[#a09b8c] transition-colors">Preferencias de cookies</a>
                    </div>
                    <div className="text-center md:text-right">
                        <p>© 2025 Riot Games, Inc. Todos los derechos reservados.</p>
                    </div>
                </div>

                {/* Rating and Legal Text */}
                <div className="mt-8 text-center text-xs text-[#5b5a56] max-w-4xl mx-auto">
                    <p className="leading-relaxed">
                        League of Legends y Riot Games son marcas comerciales o marcas comerciales registradas de Riot Games, Inc. 
                        League of Legends © Riot Games, Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
}
