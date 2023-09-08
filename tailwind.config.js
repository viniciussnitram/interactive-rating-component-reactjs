/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        /* Primary */
        "orange": "var(--orange)",
        /* Neutral */
        "white": "var(--white)",
        "light-grey": "var(--light-grey)",
        "medium-grey": "var(--medium-grey)",
        "dark-blue": "var(--dark-blue)",
        "very-dark-blue": "var(--very-dark-blue)"
      }
    },
  },
  plugins: [],
}
