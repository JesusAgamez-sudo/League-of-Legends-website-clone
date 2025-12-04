import React from 'react';
import NewsCard from './NewsCard';

export default function FeaturedNews() {
    const newsItems = [
        {
            id: 1,
            title: "Exhibición de Lux Oscuridad Cósmica Chibi",
            category: "ACTUALIZACIONES DEL JUEGO",
            date: "30/11/2025",
            description: "El final se acerca. Solo queda elegir. ¿Arcoíris cósmico a lo loco... u oscuridad eterna?",
            link: "https://www.youtube.com/watch?v=DfI0BRs9fjA",
            image: "https://img.youtube.com/vi/DfI0BRs9fjA/maxresdefault.jpg"
        },
        {
            id: 2,
            title: "Minicinemática de arena Campos de Volrachnun",
            category: "ACTUALIZACIONES DEL JUEGO",
            date: "26/11/2025",
            description: "Decidido a ser la primera Minileyenda digna de ser elegida del Lobo, Abrasón se prepara para pelear.",
            link: "https://www.youtube.com/watch?v=XY0_ifsqJmM",
            image: "https://img.youtube.com/vi/XY0_ifsqJmM/maxresdefault.jpg"
        },
        {
            id: 3,
            title: "Minicinemática de Darius Rey Divino Desatado",
            category: "ACTUALIZACIONES DEL JUEGO",
            date: "26/11/2025",
            description: "Los lobos están en tu puerta...",
            link: "https://www.youtube.com/watch?v=vM9xbKEk4i8",
            image: "https://img.youtube.com/vi/vM9xbKEk4i8/maxresdefault.jpg"
        }
    ];

    return (
        <section className="relative bg-[#f9f9f9] py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-[1300px] mx-auto">
                {/* Section Header */}
                <div className="mb-8">
                    <h2 className="text-[#0a1428] text-2xl md:text-3xl font-bold uppercase italic tracking-wider font-sans">
                        NOTICIAS DESTACADAS
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <NewsCard
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
