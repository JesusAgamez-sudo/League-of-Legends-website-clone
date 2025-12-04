import React from 'react';

export default function NewsCard({ image, category, date, title, description, link }) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 cursor-pointer"
        >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-sm aspect-video bg-[#010a13]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <div className="w-12 h-12 rounded-full bg-[#c8aa6e] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <svg className="w-5 h-5 text-[#010a13] ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-bold tracking-wider">
                    <span className="text-[#c8aa6e] uppercase">{category}</span>
                    <span className="text-[#5b5a56]">{date}</span>
                </div>

                <h3 className="text-[#0a1428] text-lg font-bold leading-tight group-hover:text-[#c8aa6e] transition-colors duration-300 font-sans">
                    {title}
                </h3>

                <p className="text-[#5b5a56] text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </a>
    );
}
