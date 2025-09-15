/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'banner-pink': '#4a90e2',
        'banner-coral': '#5ba3f2', 
        'banner-orange': '#7dc8e8',
        'banner-peach': '#a8dff0',
        'banner-green': '#81d4af',
      },
      backgroundImage: {
        'banner-gradient': 'linear-gradient(135deg, #92ccfc 0%, #5d8be9 100%)',
        'banner-gradient-hero': 'linear-gradient(135deg, #a7e2f2 0%, #5d8be9 100%)',
        'banner-gradient-soft': 'linear-gradient(135deg, #f0fdf4 0%, #e6f7ff 50%, #e1f5fe 100%)',
      }
    },
  },
  plugins: [],
}