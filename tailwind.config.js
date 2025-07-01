module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',  // tablet breakpoint
      desktop: '1728px', // ✅ custom breakpoint
    },
  },
  plugins: [],
}
