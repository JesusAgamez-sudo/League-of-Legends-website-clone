import React from 'react';

export default function StyleSection() {
    return (
        <section className="relative h-[600px] md:h-[700px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt3b366925d9ee7eff/65b5f0d9a4e3e7f7c7e3e3e3/skins-splash.jpg"
                    alt="Champion Skins"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg';
                    }}
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-4 md:px-8 lg:px-16">
                <div className="max-w-[1300px] mx-auto w-full">
                    <div className="max-w-2xl">
                        <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold uppercase mb-6 leading-tight font-sans">
                            DOMINA CON
                            <br />
                            <span className="text-[#c8aa6e]">ESTILO</span>
                        </h2>
                        <p className="text-[#f0e6d2] text-lg md:text-xl mb-8 leading-relaxed">
                            Cambia la apariencia de tus campeones favoritos con aspectos y personaliza tu estilo.
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

            {/* Decorative Element */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#010a13] to-transparent"></div>
        </section>
    );
}
