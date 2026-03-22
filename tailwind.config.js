/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ohm: {
          dark: '#0B1426',
          navy: '#1a2744',
          gold: '#C8A35F',
          'gold-light': '#D4B978',
          teal: '#2DD4A8',
          cream: '#F5F0EB',
          'warm-gray': '#E8E0D6',
          slate: '#94A3B8',
        },
        lidi: {
          coral: '#E86C5A',
          'coral-dark': '#D4523F',
          warm: '#FFF5EE',
          orange: '#F0925C',
          sand: '#F5E6D3',
        }
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
