import React, { useState } from 'react';

export default function GameModesSection() {
    const [activeMode, setActiveMode] = useState('summoners-rift');

    const gameModes = [
        {
            id: 'summoners-rift',
            name: 'Grieta del Invocador',
            description: 'Despeja tu carril, sumérgete en batallas épicas en equipo de 5v5 y destruye el nexo enemigo antes de que destruyan el tuyo.',
            image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltb945e8e9a5b3f3e3/summoners-rift.jpg',
            fallbackImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg'
        },
        {
            id: 'aram',
            name: 'ARAM',
            description: 'Pelea a lo largo de un puente congelado mientras tu equipo de campeones aleatorios se dirige hacia el nexo enemigo en este caótico y divertido modo de juego de 5v5.',
            image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltc3e3e3e3e3e3e3e3/aram.jpg',
            fallbackImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg'
        },
        {
            id: 'tft',
            name: 'TEAMFIGHT TACTICS',
            description: 'Recluta. Refuerza. Domina. Elige entre cientos de combinaciones de campeones y objetos para crear tu equipo invencible.',
            image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt9e9e9e9e9e9e9e9e/tft.jpg',
            fallbackImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg'
        }
    ];

    const currentMode = gameModes.find(mode => mode.id === activeMode);

    return (
        <section className="relative bg-[#010a13] py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-[1300px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-[#f0e6d2] text-sm font-bold uppercase tracking-[0.2em] mb-4">
                        MÚLTIPLES MANERAS DE
                    </h2>
                    <h3 className="text-white text-5xl md:text-6xl font-bold uppercase mb-8 font-sans">
                        JUGAR
                    </h3>
                </div>

                {/* Mode Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {gameModes.map((mode) => (
                        <button
                            key={mode.id}
                            onClick={() => setActiveMode(mode.id)}
                            className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
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
                <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-lg">
                    {/* Background Image */}
                    <img
                        src={currentMode.image}
                        alt={currentMode.name}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                        onError={(e) => {
                            e.target.src = currentMode.fallbackImage;
                        }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="max-w-3xl">
                            <h4 className="text-white text-3xl md:text-4xl font-bold uppercase mb-4">
                                {currentMode.name}
                            </h4>
                            <p className="text-[#f0e6d2] text-lg md:text-xl mb-8 leading-relaxed">
                                {currentMode.description}
                            </p>
                            <a
                                href="https://signup.leagueoflegends.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-10 py-5 bg-[#c8aa6e] text-[#0a1428] font-bold uppercase tracking-wider hover:bg-[#d8ba7e] transition-all duration-300 text-sm"
                            >
                                Juega ahora
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
