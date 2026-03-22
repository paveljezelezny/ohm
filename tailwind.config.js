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
          deep: '#1A0E2E',
          dark: '#231344',
          navy: '#2D1B4E',
          violet: '#3D2660',
          mint: '#7AEDC6',
          'mint-light': '#A5F4DC',
          rose: '#E8A0BF',
          'rose-light': '#F0BCD4',
          lavender: '#9B7AEA',
          'lavender-light': '#B99BF5',
          peach: '#F0C8A0',
          cream: '#F8F4FF',
          'warm-gray': '#E8E0F0',
          slate: '#A89FBF',
          'glass': 'rgba(255,255,255,0.06)',
        },
        lidi: {
          coral: '#E86C8A',
          'coral-dark': '#D4527A',
          warm: '#FFF5F8',
          orange: '#F0925C',
          sand: '#F5E6D8',
          rose: '#E8A0BF',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #1A0E2E 0%, #3D2660 50%, #2D1B4E 100%)',
        'gradient-blob-mint': 'radial-gradient(ellipse at center, #7AEDC6 0%, #7AEDC640 40%, transparent 70%)',
        'gradient-blob-rose': 'radial-gradient(ellipse at center, #E8A0BF 0%, #E8A0BF40 40%, transparent 70%)',
        'gradient-blob-lavender': 'radial-gradient(ellipse at center, #9B7AEA 0%, #9B7AEA40 40%, transparent 70%)',
      },
      boxShadow: {
        'glow-mint': '0 0 40px rgba(122, 237, 198, 0.3)',
        'glow-rose': '0 0 40px rgba(232, 160, 191, 0.3)',
        'glow-lavender': '0 0 40px rgba(155, 122, 234, 0.3)',
      },
      animation: {
        'blob': 'blob 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
