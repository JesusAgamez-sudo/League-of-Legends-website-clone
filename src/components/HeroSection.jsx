import { useEffect, useState } from 'react';

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#010a13]">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
                >
                    <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm" type="video/webm" />
                </video>

                {/* Overlays for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#010a13] via-transparent to-[#010a13]/40"></div>
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto mt-16">

                {/* Logo Image */}
                <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img
                        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9eb028de391e65072d06e77f06d0955f66b9fa2c-736x316.png?auto=format&fit=fill&q=80&w=552"
                        alt="League of Legends Logo"
                        className="w-[238px] md:w-[450px] lg:w-[552px] h-auto drop-shadow-2xl"
                    />
                </div>

                {/* Headline */}
                <h1
                    className="font-sans text-white text-[16px] font-bold uppercase tracking-wide mt-4 mb-8 max-w-3xl leading-tight animate-fade-in-up italic"
                    style={{
                        animationDelay: '0.4s',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}
                >
                    League of Legends: un MOBA 5v5 en el que dos equipos se enfrentan para destruir el nexo enemigo
                </h1>

                {/* CTA Button */}
                <div className="relative inline-block group">
                    {/* Outer Border Container */}
                    <div className="absolute -inset-[5px] border border-[#f0e6d2]/30 transition-all duration-300 group-hover:border-[#f0e6d2]/60"></div>
                    
                    {/* Button */}
                    <a 
                        href="https://signup.leagueoflegends.com/es-mx/signup/redownload" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative block px-10 py-5 bg-[#c8aa6e] text-[#0a1428] font-spiegel text-[14px] font-bold uppercase tracking-widest hover:bg-[#d8ba7e] transition-all duration-300"
                    >
                        JUEGA GRATIS
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
                <div className="w-[1px] h-8 bg-gradient-to-b from-[#c8aa6e] to-transparent"></div>
            </div>
        </section>
    );
}
