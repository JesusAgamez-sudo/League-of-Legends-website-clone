import React from 'react';

export default function StyleSection() {
    return (
        <section className="relative h-[500px] md:h-[650px] lg:h-[750px] overflow-hidden bg-[#010a13]">
            {/* Background Image with specific positioning */}
            <div className="absolute inset-0">
                <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt0293f9c0b9e3f3f3/skins-background.jpg')`,
                        backgroundPosition: 'center 30%'
                    }}
                    onError={(e) => {
                        e.target.style.backgroundImage = `url('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_7.jpg')`;
                    }}
                >
                    {/* Fallback gradient if image doesn't load */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-pink-900/40"></div>
                </div>
                
                {/* Gradient Overlays for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#010a13] via-transparent to-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center px-4 md:px-8 lg:px-16">
                <div className="max-w-[1300px] mx-auto w-full">
                    <div className="max-w-2xl">
                        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase mb-6 leading-tight font-sans">
                            DOMINA CON
                            <br />
                            <span className="text-[#c8aa6e] italic">ESTILO</span>
                        </h2>
                        <p className="text-[#f0e6d2] text-base md:text-lg lg:text-xl mb-10 leading-relaxed max-w-xl">
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

            {/* Bottom fade to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#010a13] to-transparent pointer-events-none"></div>
        </section>
    );
}
