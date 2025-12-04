import React, { useState, useRef } from 'react';

export default function ChampionSelector() {
    const [activeRole, setActiveRole] = useState('asesinos');
    const scrollContainerRef = useRef(null);

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
            { name: 'Talon', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg' },
            { name: 'Fizz', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg' },
            { name: 'Ekko', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg' },
            { name: "Kha'Zix", image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg' },
            { name: 'Rengar', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg' },
            { name: 'Shaco', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg' },
            { name: 'Evelynn', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg' },
            { name: 'Pyke', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg' },
            { name: 'Qiyana', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg' },
        ],
        luchadores: [
            { name: 'Darius', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg' },
            { name: 'Garen', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg' },
            { name: 'Fiora', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg' },
            { name: 'Jax', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg' },
            { name: 'Camille', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg' },
            { name: 'Irelia', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg' },
            { name: 'Riven', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg' },
            { name: 'Yasuo', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg' },
            { name: 'Yone', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg' },
            { name: 'Sett', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg' },
            { name: 'Aatrox', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg' },
            { name: 'Mordekaiser', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg' },
        ],
        magos: [
            { name: 'Lux', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg' },
            { name: 'Ahri', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg' },
            { name: 'Syndra', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg' },
            { name: 'Orianna', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg' },
            { name: 'Viktor', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg' },
            { name: 'Xerath', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg' },
            { name: 'Veigar', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg' },
            { name: 'Annie', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg' },
            { name: 'Brand', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg' },
            { name: "Vel'Koz", image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg' },
            { name: 'Ziggs', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg' },
            { name: 'Azir', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg' },
        ],
        tiradores: [
            { name: 'Jinx', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg' },
            { name: 'Caitlyn', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg' },
            { name: 'Ashe', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg' },
            { name: 'Ezreal', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg' },
            { name: 'Vayne', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg' },
            { name: "Kai'Sa", image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg' },
            { name: 'Jhin', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg' },
            { name: 'Miss Fortune', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg' },
            { name: 'Lucian', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg' },
            { name: 'Draven', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg' },
            { name: 'Sivir', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg' },
            { name: 'Tristana', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg' },
        ],
        soportes: [
            { name: 'Thresh', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg' },
            { name: 'Lulu', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg' },
            { name: 'Nami', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg' },
            { name: 'Janna', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg' },
            { name: 'Soraka', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg' },
            { name: 'Sona', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg' },
            { name: 'Leona', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg' },
            { name: 'Braum', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg' },
            { name: 'Rakan', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg' },
            { name: 'Morgana', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg' },
            { name: 'Blitzcrank', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg' },
            { name: 'Nautilus', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg' },
        ],
        tanques: [
            { name: 'Malphite', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg' },
            { name: 'Leona', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg' },
            { name: 'Braum', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg' },
            { name: 'Ornn', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg' },
            { name: 'Sion', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg' },
            { name: 'Maokai', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg' },
            { name: 'Sejuani', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg' },
            { name: 'Zac', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg' },
            { name: 'Amumu', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg' },
            { name: 'Rammus', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg' },
            { name: "Cho'Gath", image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg' },
            { name: 'Shen', image: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg' },
        ]
    };

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = 340; // card width (320px) + gap (16px) + padding (4px)
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
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
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                    {roles.map((role) => (
                        <button
                            key={role.id}
                            onClick={() => setActiveRole(role.id)}
                            className={`px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                                activeRole === role.id
                                    ? 'bg-[#c8aa6e] text-[#0a1428]'
                                    : 'bg-[#1e2328] text-[#a09b8c] hover:bg-[#2a2e35] hover:text-white'
                            }`}
                        >
                            {role.name}
                        </button>
                    ))}
                </div>

                {/* Champions Carousel */}
                <div className="relative mb-12">
                    {/* Scroll Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#0a1428]/80 backdrop-blur-sm hover:bg-[#c8aa6e] text-white hover:text-[#0a1428] flex items-center justify-center transition-all duration-300"
                        aria-label="Scroll left"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#0a1428]/80 backdrop-blur-sm hover:bg-[#c8aa6e] text-white hover:text-[#0a1428] flex items-center justify-center transition-all duration-300"
                        aria-label="Scroll right"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Carousel Container */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-12"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {champions[activeRole].map((champion, index) => (
                            <div
                                key={index}
                                className="group relative flex-shrink-0 w-[320px] cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
                            >
                                <div className="aspect-[16/9] relative overflow-hidden">
                                    <img
                                        src={champion.image}
                                        alt={champion.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                                    {/* Champion Name */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h4 className="text-white text-2xl font-bold uppercase tracking-wide font-beaufort">
                                            {champion.name}
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="https://www.leagueoflegends.com/es-mx/champions/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-transparent border-2 border-[#c8aa6e] text-[#c8aa6e] font-bold uppercase tracking-wider hover:bg-[#c8aa6e] hover:text-[#0a1428] transition-all duration-300 text-center text-sm"
                    >
                        Descubrir más campeones
                    </a>
                    <a
                        href="https://signup.leagueoflegends.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-[#c8aa6e] text-[#0a1428] font-bold uppercase tracking-wider hover:bg-[#d8ba7e] transition-all duration-300 text-center text-sm"
                    >
                        Juega ahora
                    </a>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
