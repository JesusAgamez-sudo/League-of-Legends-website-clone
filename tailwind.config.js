/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'riot-gold': '#c8aa6e',
                'riot-gold-light': '#f0e6d2',
                'riot-gold-dark': '#b88a35',
                'riot-gold-darker': '#785a28',
                'riot-blue': '#0bc6e3',
                'riot-black': '#010a13',
                'riot-gray': '#1e2328',
            },
            fontFamily: {
                sans: ['Beaufort for LOL', 'serif'],
                spiegel: ['Spiegel', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
