import React, { useState } from 'react';

export default function ChampionSelector() {
    const [activeRole, setActiveRole] = useState('asesinos');

    const roles = [
        { id: 'asesinos', name: 'Asesinos' },
        { id: 'luchadores', name: 'Luchadores' },
        { id: 'magos', name: 'Magos' },
        { id: 'tiradores', name: 'Tiradores' },
        { id: 'soportes', name: 'Soportes' },
        { id: 'tanques', name: 'Tanques' }
    ];

    const champions = {
        asesinos: [
            { name: 'Zed', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg' },
            { name: 'Akali', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg' },
            { name: 'Katarina', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg' },
        ],
        luchadores: [
            { name: 'Darius', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg' },
            { name: 'Garen', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg' },
            { name: 'Fiora', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg' },
        ],
        magos: [
            { name: 'Lux', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg' },
            { name: 'Ahri', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg' },
            { name: 'Syndra', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg' },
        ],
        tiradores: [
            { name: 'Jinx', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg' },
            { name: 'Caitlyn', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg' },
            { name: 'Ashe', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg' },
        ],
        soportes: [
            { name: 'Thresh', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg' },
            { name: 'Lulu', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg' },
            { name: 'Nami', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg' },
        ],
        tanques: [
            { name: 'Malphite', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg' },
            { name: 'Leona', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg' },
            { name: 'Braum', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg' },
        ]
    };

    return (
        <section className="relative bg-[#010a13] py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#010a13] via-[#0a1428]/50 to-[#010a13]"></div>

            <div className="relative z-10 max-w-[1300px] mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-[#f0e6d2] text-sm font-bold uppercase tracking-[0.2em] mb-4">
                        ELIGE TU
                    </h2>
                    <h3 className="text-white text-5xl md:text-6xl font-bold uppercase mb-6 font-sans">
                        CAMPEÓN
                    </h3>
                    <p className="text-[#a09b8c] text-lg max-w-2xl mx-auto mb-8">
                        Ya sea que prefieras lanzarte directo a la batalla, apoyar a tus compañeros de equipo, o algo intermedio, hay un lugar para ti en la Grieta.
                    </p>
                </div>

                {/* Role Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {roles.map((role) => (
                        <button
                            key={role.id}
                            onClick={() => setActiveRole(role.id)}
                            className={`px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                                activeRole === role.id
                                    ? 'bg-[#c8aa6e] text-[#0a1428]'
                                    : 'bg-[#1e2328] text-[#a09b8c] hover:bg-[#2a2e35] hover:text-white'
                            }`}
                        >
                            {role.name}
                        </button>
                    ))}
                </div>

                {/* Champions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {champions[activeRole].map((champion, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105"
                        >
                            <div className="aspect-[16/9] relative">
                                <img
                                    src={champion.image}
                                    alt={champion.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                                {/* Champion Name */}
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h4 className="text-white text-2xl font-bold uppercase tracking-wide">
                                        {champion.name}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="https://www.leagueoflegends.com/es-mx/champions/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-transparent border-2 border-[#c8aa6e] text-[#c8aa6e] font-bold uppercase tracking-wider hover:bg-[#c8aa6e] hover:text-[#0a1428] transition-all duration-300 text-center"
                    >
                        Descubrir más campeones
                    </a>
                    <a
                        href="https://signup.leagueoflegends.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-[#c8aa6e] text-[#0a1428] font-bold uppercase tracking-wider hover:bg-[#d8ba7e] transition-all duration-300 text-center"
                    >
                        Juega ahora
                    </a>
                </div>
            </div>
        </section>
    );
}
