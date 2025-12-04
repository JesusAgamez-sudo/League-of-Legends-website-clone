import React from 'react';
import NewsCard from './NewsCard';

export default function FeaturedNews() {
    const newsItems = [
        {
            category: 'Actualizaciones del juego',
            date: '2025-12-04T02:00:00.000Z',
            title: 'Lore & Legends: tráiler de campeones',
            description: 'Descubran las habilidades de sus campeones favoritos en Lore & Legends.',
            image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0e0e0e0e0e0e0e0e/lore-legends-champions.jpg',
            fallbackImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
            link: 'https://www.youtube.com/watch?v=GQFtU7KjsZA'
        },
        {
            category: 'Actualizaciones del juego',
            date: '2025-12-03T20:00:00.000Z',
            title: 'Teamfight Tactics: Lore & Legends',
            description: '¡Revive las emblemáticas historias de Runaterra en el set más grande de TFT hasta ahora!',
            image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1e1e1e1e1e1e1e1e/tft-lore-legends.jpg',
            fallbackImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg',
            link: 'https://teamfighttactics.leagueoflegends.com/es-mx/set-overview/teamfight-tactics-lore-and-legends'
        },
        {
            category: 'Actualizaciones del juego',
            date: '2025-12-02T19:00:00.000Z',
            title: 'Notas de la versión 16.1 de Teamfight Tactics',
            description: '¡Desbloquea una infinidad de composiciones con el nuevo set, Lore & Legends!',
            image: 'https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt2e2e2e2e2e2e2e2e/tft-patch-notes.jpg',
            fallbackImage: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg',
            link: 'https://teamfighttactics.leagueoflegends.com/es-mx/news/game-updates/teamfight-tactics-patch-16-1'
        }
    ];

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString('es-MX', options);
    };

    return (
        <section className="bg-[#010a13] py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-[1300px] mx-auto">
                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-[#f0e6d2] text-sm font-bold uppercase tracking-[0.2em] mb-4">
                        NOTICIAS
                    </h2>
                    <h3 className="text-white text-5xl md:text-6xl font-bold uppercase font-sans">
                        DESTACADAS
                    </h3>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newsItems.map((item, index) => (
                        <NewsCard
                            key={index}
                            category={item.category}
                            date={formatDate(item.date)}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            fallbackImage={item.fallbackImage}
                            link={item.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
