import { useEffect, useRef } from 'react';

export default function HeroSection() {
    const videoRef = useRef(null);

    useEffect(() => {
        // Parallax effect on scroll
        const handleScroll = () => {
            if (videoRef.current) {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.5;
                videoRef.current.style.transform = `translate(-50%, -50%) translateY(${parallax}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#010a13]">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-60"
                    style={{ transition: 'transform 0.1s ease-out' }}
                >
                    <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/8ab3e227121c53aacab0c9b9f7a48adbc65db520.webm" type="video/webm" />
                </video>

                {/* Overlays for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#010a13] via-transparent to-[#010a13]/40"></div>
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16 max-w-[1300px] mx-auto">

                {/* Logo Image */}
                <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <img
                        src="https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/9eb028de391e65072d06e77f06d0955f66b9fa2c-736x316.png?auto=format&fit=fill&q=80&w=552"
                        alt="League of Legends Logo"
                        className="w-[238px] md:w-[350px] lg:w-[450px] h-auto drop-shadow-2xl"
                    />
                </div>

                {/* Headline */}
                <h1
                    className="font-sans text-white text-[16px] font-bold uppercase tracking-[0.1em] mb-8 max-w-[600px] leading-[1.4] animate-fade-in-up italic"
                    style={{
                        animationDelay: '0.4s',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                    }}
                >
                    League of Legends: un MOBA 5v5 en el que dos equipos se enfrentan para destruir el nexo enemigo
                </h1>

                {/* CTA Button */}
                <div className="relative inline-block group animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    {/* Outer Border Container */}
                    <div className="absolute -inset-[5px] border border-[#f0e6d2]/30 transition-all duration-300 group-hover:border-[#f0e6d2]/60"></div>
                    
                    {/* Button */}
                    <a 
                        href="https://signup.leagueoflegends.com/es-mx/signup/redownload" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="relative block px-10 py-[20px] bg-[#c8aa6e] text-[#0a1428] font-spiegel text-[14px] font-bold uppercase tracking-[0.1em] hover:bg-[#d8ba7e] transition-all duration-300"
                    >
                        JUEGA GRATIS
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce-slow">
                <svg className="w-6 h-6 text-[#f0e6d2]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
