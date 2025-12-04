import React, { useState } from 'react';

export default function GameModesSection() {
    const [activeMode, setActiveMode] = useState('summoners-rift');

    const gameModes = [
        {
            id: 'summoners-rift',
            name: 'Grieta del Invocador',
            description: 'Despeja tu carril, sumérgete en batallas épicas en equipo de 5v5 y destruye el nexo enemigo antes de que destruyan el tuyo.',
            image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0e0e0e0e0e0e0e0e/sr-background.jpg',
            fallbackImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg',
            bgPosition: 'center'
        },
        {
            id: 'aram',
            name: 'ARAM',
            description: 'Pelea a lo largo de un puente congelado mientras tu equipo de campeones aleatorios se dirige hacia el nexo enemigo en este caótico y divertido modo de juego de 5v5.',
            image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1e1e1e1e1e1e1e1e/aram-background.jpg',
            fallbackImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg',
            bgPosition: 'center'
        },
        {
            id: 'tft',
            name: 'TEAMFIGHT TACTICS',
            description: 'Recluta. Refuerza. Domina. Elige entre cientos de combinaciones de campeones y objetos para crear tu equipo invencible.',
            image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2e2e2e2e2e2e2e2e/tft-background.jpg',
            fallbackImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg',
            bgPosition: 'center 30%'
        }
    ];

    const currentMode = gameModes.find(mode => mode.id === activeMode);

    return (
        <section className="relative bg-[#010a13] py-16 md:py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-[1300px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-12">
                    <h2 className="text-[#f0e6d2] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-3 md:mb-4">
                        MÚLTIPLES MANERAS DE
                    </h2>
                    <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-6 md:mb-8 font-sans">
                        JUGAR
                    </h3>
                </div>

                {/* Mode Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-10">
                    {gameModes.map((mode) => (
                        <button
                            key={mode.id}
                            onClick={() => setActiveMode(mode.id)}
                            className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                                activeMode === mode.id
                                    ? 'bg-[#c8aa6e] text-[#0a1428]'
                                    : 'bg-[#1e2328] text-[#a09b8c] hover:bg-[#2a2e35] hover:text-white'
                            }`}
                        >
                            {mode.name}
                        </button>
                    ))}
                </div>

                {/* Mode Content */}
                <div className="relative h-[450px] md:h-[550px] lg:h-[650px] overflow-hidden rounded-sm">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-700"
                        style={{
                            backgroundImage: `url('${currentMode.image}')`,
                            backgroundPosition: currentMode.bgPosition
                        }}
                        onError={(e) => {
                            e.target.style.backgroundImage = `url('${currentMode.fallbackImage}')`;
                        }}
                    >
                        {/* Fallback gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30"></div>
                    </div>
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex items-end">
                        <div className="p-6 md:p-10 lg:p-12 w-full">
                            <div className="max-w-3xl">
                                <h4 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-4 md:mb-6 tracking-wide">
                                    {currentMode.name}
                                </h4>
                                <p className="text-[#f0e6d2] text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed max-w-2xl">
                                    {currentMode.description}
                                </p>
                                <a
                                    href="https://signup.leagueoflegends.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-8 md:px-10 py-4 md:py-5 bg-[#c8aa6e] text-[#0a1428] font-bold uppercase tracking-wider hover:bg-[#d8ba7e] transition-all duration-300 text-sm"
                                >
                                    Juega ahora
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
