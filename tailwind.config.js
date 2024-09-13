// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        spinSlow: 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
